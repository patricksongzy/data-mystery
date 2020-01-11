import json
import time
from event import Event


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
                # TODO find closest
                timestamps = binary_search(list(events.keys()), 0, len(events) - 1, event_time)
                print(name)
                print(events[timestamps[0]])

            print(event_time)
            print(v)
    
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
