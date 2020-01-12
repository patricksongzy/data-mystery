from flask import *


app = Flask(__name__)

personEvents = {
    'Dave': [
        
    ],
    'Thomas': [
        
    ],
    'Harrison': [
        
    ],
    'Rob': [
        
    ],
    'Alok': [
        
    ],
    'Kristina': [
        
    ],
    'Veronica': [

    ],
    'James': [

    ],
    'Eugene': [

    ],
    'Jason': [

    ],
    'Marc-Andre': [

    ],
    'Salina': [

    ]
}
'''
i = 0 #counter for order
for person, info in data.items():
    
    i += 1
    
    if person != 'n/a':
        info['order'] = i
        personEvents[person].append(info)
    else:
        for people, events in personEvents.items():
            info['order'] = i
            personEvents[people].append(info)
'''

@app.route('/')
def home():
    return render_template('home.html')

def animate():
    return render_template('Eric.html', ericsInfo)

app.run()