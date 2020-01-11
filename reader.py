import json
import time
from event import Event
import math
import anomaly_detector

class Reader:
    def __init__(self):
        self.people = {}
        self.unknown_events = {}
        self.predicted_events = {}
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

                current_event = Event(location, device_type, action, is_occupied)

                if (guest_name == 'n/a'):
                    self.unknown_events[t] = current_event
                elif (guest_name not in self.people):
                    self.people[guest_name] = {t: current_event}
                else:
                    self.people[guest_name][t] = current_event

        for name, person_events in self.people.items():
            timestamps = []
            device_names = list(self.devices.keys())
            for i in range(len(device_names)):
                for event_time, event in person_events.items():
                    print(device.names[i])
                    if event.device == device_names[i]:
                        timestamps.append([i, int(time.mktime(time.strptime(event_time, '%Y-%m-%d %H:%M:%S')))])
            
            print(timestamps)

            anomaly_detector.test(timestamps)

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
