import json
import time
from event import Event
import math

class Reader:
    def __init__(self):
        self.people = {}
        self.unknown_events = {}
        self.names = set()
        self.devices = {}
        self.read_devices()
        self.setup_people()

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


    def setup_people(self):
        with open('resources/murder-data.json', 'r') as json_file:
            data = json.load(json_file)
            for k, v in data.items():
                device_type = v['device']
                guest_name = v['guest-id']
                location = v['device-id']
                action = v['event']

                t = time.strftime('%Y-%m-%d %H:%M:%S', time.localtime(int(k)))

                is_occupied = self.is_person_occupied(device_type, action)

                current_event = Event(location, action, is_occupied)

                if (guest_name == 'n/a'):
                    self.unknown_events[t] = current_event
                elif (guest_name not in self.people):
                    self.people[guest_name] = {t: current_event}
                else:
                    self.people[guest_name][t] = current_event
        
        for event_time, v in self.unknown_events.items():
            for name, events in self.people.items():
                timestamps = binary_search(list(events.keys()), 0, len(events) - 1, event_time)
                print(get_distance(events[timestamps[0]].location, v.location))

            print(event_time)
            print(v)
    
        print(get_distance("231", "235"))
        self.logs_by_person("Veronica")


def binary_search(array, low_index, high_index, expected_value):
    if (high_index >= low_index):
        # nearly every binary search has a bug
        mid_index = low_index + ((high_index - low_index) // 2)
        mid_value = array[mid_index]

        if (mid_value == expected_value):
            return (array[mid_index],)
        elif (mid_value > expected_value):
            return binary_search(array, low_index, mid_index - 1, expected_value)
        else:
            return binary_search(array, mid_index + 1, high_index, expected_value)
    else:
        # return the closest items
        if (low_index >= len(array)):
            return (array[high_index],)

        return array[high_index], array[low_index]


    def get_point(room):
        x1=0
        y1=0
        with open("resources/floorcoordinates.txt") as coordinates:
            line = coordinates.readline()
            while line:
                if line.split(':')[0] == point1:
                    x1 = line.split(':')[1].split(',')[0]
                    y1 = line.split(':')[1].split(',')[1]
                line = coordinates.readline()
            if (x1+y1)==0:
                raise ValueError("Please enter a valid room number")
        coordinates.close()
        return (x1,y1)

    def get_distance(point1, point2):
        x1 = get_point(point1)[0]
        y1 = get_point(point1)[1]
        x2 = get_point(point2)[0]
        y2 = get_point(point2)[1]

        return math.sqrt((y2-y1)**2+(x2-x1)**2)

reader = Reader()
print(reader.people["Veronica"][0])
