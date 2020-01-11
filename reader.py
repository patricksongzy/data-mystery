import json
import time
from event import Event


class Reader:
    def __init__(self):
        self.people = {}
        self.names = set()
        self.setup_names()
        self.setup_people()

    def setup_people(self):
        for name in self.names:
            self.people[name] = []
        with open('resources/murder-data.json', 'r') as json_file:
            data = json.load(json_file)
            for k, v in data.items():
                location = v['device-id']
                t = time.strftime('%Y-%m-%d %H:%M:%S', time.localtime(int(k)))
                action = v['event']
                self.people[v['guest-id']].append(Event(location, action, t))

    def setup_names(self):
        with open('resources/murder-data.json', 'r') as json_file:
            data = json.load(json_file)
            for k, v in data.items():
                self.names.add(v['guest-id'])


reader = Reader()
print(reader.people["Veronica"][0].time)
