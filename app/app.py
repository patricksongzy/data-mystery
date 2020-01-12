from flask import *
from reader import Reader
import time

app = Flask(__name__)

reader = Reader()

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/logs')
def logs():
    logs = reader.people_logs
    print(logs)
    logs_json = json.dumps(logs)
    return render_template('logs.html', logs=logs_json)    

@app.route('/animation')
def animate():
    final_data = reader.flattened
    reader_json = json.dumps(final_data)
    return render_template('animation.html', events=reader_json)

app.run()