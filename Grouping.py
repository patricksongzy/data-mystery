import json

with open('Murder-on-the-2nd-Floor-Raw-Data.json', 'r') as f
    data = json.load(f)

for time, event in data.items():
    