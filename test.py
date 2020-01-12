import json
locations = set()
with open('resources/murder-data.json', 'r') as json_file:
    data = json.load(json_file)
    for k, v in data.items():
        locations.add(v['device-id'])

print(locations)
