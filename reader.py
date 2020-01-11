import json
import time

names = set()

with open('murder-data.json', 'r') as json_file:
  data = json.load(json_file)
  for k, v in data.items():
    names.add(v['guest-id'])

print(names)
people = {}

print(people)

with open('murder-data.json', 'r') as json_file:
  data = json.load(json_file)
  for k, v in data.items():
    names.add(v['guest-id'])