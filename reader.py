import json
import time
from event import Event
import math

class Reader:
    def __init__(self):
        self.people = {}
        self.names = set()
        self.setup_names()
        self.setup_people()

    def setup_people(self):
        '''Initializes people dictionary with name of person as key and list of events as value.'''
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
        '''Initializes name of people in the hotel.'''
        with open('resources/murder-data.json', 'r') as json_file:
            data = json.load(json_file)
            for k, v in data.items():
                self.names.add(v['guest-id'])

    def get_distance(point1, point2):
        x1 = point1[0]
        y1 = point1[1]
        x2 = point2[0]
        y2 = point2[1]
        return math.sqrt((y2-y1)**2+(x2-x1)**2)

reader = Reader()
print(reader.people["Veronica"][0])
