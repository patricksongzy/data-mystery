from collections import OrderedDict
import json
import time
from event import Event
import math
import anomaly_detector

class Reader:
    def __init__(self):
        self.people = {}
        self.flattened = []
        self.unknown_events = {}
        self.predicted_events = {}
        self.names = set()
        self.devices = {}
        self.read_devices()
        self.setup_people()
        self.flatten()

    def read_devices(self):
        with open('resources/devices.json', 'r') as json_file:
            data = json.load(json_file)
            for device_name, actions in data.items():
                self.devices[device_name] = actions


    def is_person_occupied(self, device_type, action):
        return self.devices[device_type][action]


    def logs_by_person(self, person):
        logs = ''

        for t, event in self.people[person].items():
            logs += 'at ' + t + ', ' + event.action + ' at ' + event.location + '\n'
        
        print(logs)

    def flatten(self):
        # returns [[time, place name]]
        for name, person_events in self.people.items():
            for event_time, event in person_events.items():
                self.flattened.append([event_time, event.location, name])
        
        self.flattened = sorted(self.flattened)


    def setup_people(self):
        door_close_queue = {}

        # creates a map of events per person, per timestamp.
        with open('resources/murder-data.json', 'r') as json_file:
            data = json.load(json_file)
            for k, v in data.items():
                device_type = v['device']
                guest_name = v['guest-id']
                location = v['device-id']
                action = v['event']

                t = time.strftime('%Y-%m-%d %H:%M:%S', time.localtime(int(k)))

                is_occupied = self.is_person_occupied(device_type, action)

                current_event = Event(location, device_type, action, is_occupied)

                if (guest_name == 'n/a'):
                    if (device_type == 'door sensor' and location in door_close_queue):
                        door_closer = door_close_queue.pop(location)
                        self.people[door_closer][t] = current_event
                    elif (action == 'unlocked no keycard'):
                        for name, person_events in self.people.items():
                            timestamp = binary_search(list(person_events.keys()), 0, len(person_events) - 1, t)
                            if (person_events[timestamp].location == location):
                                self.people[name][t] = current_event
                                break

                    self.unknown_events[t] = current_event
                else:
                    if (device_type == 'door sensor'):
                        door_close_queue[location] = guest_name

                    if (guest_name not in self.people):
                        self.people[guest_name] = {t: current_event}
                    else:
                        self.people[guest_name][t] = current_event
                
        door_occurences = {}
        device_names = list(self.devices.keys())
        for name, person_events in self.people.items():
            for event_time, event in person_events.items():
                if event.device == 'door sensor':
                    door_occurences[event_time] = [name, event]

        door_occurences = OrderedDict(sorted(door_occurences.items()))
        
        # this queue keeps track of whether the door is held or not
        held_door_queue = {}
        for t, event_details in door_occurences.items():
            name, event = event_details
            if event.action == 'unlocked no keycard':
                if event.location in held_door_queue:
                    minimum = 2**31-1
                    for other_name, person_events in self.people.items():
                        if other_name != name:
                            timestamp = binary_search(list(person_events.keys()), 0, len(person_events) - 1, t)
                            distance = get_distance(person_events[timestamp].location, event.location)
                            if distance < minimum:
                                minimum = distance
                                held_for = other_name
                    print("DOOR IS HELD with distance {} for person {}!".format(minimum, held_for))
                
                held_door_queue[event.location] = name
            elif (event.action == 'successful keycard unlock'):
                if event.location in held_door_queue and held_door_queue[event.location] == name:
                    held_door_queue.pop(event.location)            

        # for event_time, v in self.unknown_events.items():
            # if v.device == "phone":
                # caller_name = []
                # for name, events in self.people.items():
                    # timestamp = binary_search(list(events.keys()), 0, len(events) - 1, event_time)

                    # if events[timestamp].location.replace("ap1-4", "lobby") == v.location:
                        # caller_name.append(name)

        self.logs_by_person("Veronica")


def binary_search(array, low_index, high_index, expected_value):
    if (high_index >= low_index):
        # nearly every binary search has a bug
        mid_index = low_index + ((high_index - low_index) // 2)
        mid_value = array[mid_index]

        if (mid_value == expected_value):
            return array[mid_index]
        elif (mid_value > expected_value):
            return binary_search(array, low_index, mid_index - 1, expected_value)
        else:
            return binary_search(array, mid_index + 1, high_index, expected_value)
    else:
        # return the closest item
        return array[high_index]


def room_change(room1, room2):
    try:
        if (int(room1[0]) - int(room2[0]))**2 == 1:
            return True
        else:
            return False
    except:
        if (room1[0] == 'a' and room2[0] == 'a'):
            if int(room1[2]) - int(room2[2])**2 == 1:
                return True
            else:
                return False

    if room1[0] == 'a':
        if int(room1[2]) - int(room2[0])**2 == 1:
            return True
        else: 
            return False
    
    elif room2[0] == 'a':
        if int(room2[2]) - int(room2[0])**2 == 1:
            return True
        else: 
            return False


def get_point(room):
    x1=0
    y1=0
    with open("resources/floorcoordinates.txt") as coordinates:
        line = coordinates.readline()
        while line:
            if line.split(':')[0] == room:
                x1 = line.split(':')[1].split(',')[0]
                y1 = line.split(':')[1].split(',')[1]
            line = coordinates.readline()
        if (x1+y1)==0:
            raise ValueError("Please enter a valid room number: '{}' was not found".format(room))
    coordinates.close()
    return (x1,y1)

def get_distance(point1, point2):
    x1 = int(get_point(point1)[0])
    y1 = int(get_point(point1)[1])
    x2 = int(get_point(point2)[0])
    y2 = int(get_point(point2)[1])

    return math.sqrt((y2-y1)**2+(x2-x1)**2)
