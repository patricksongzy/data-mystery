import tkinter
import turtle
import time
from reader import Reader

screen = turtle.Screen()
screen.setup(960,720)

reader = Reader()
turtles = {}

for name in list(reader.people.keys()):
    turtles[name] = turtle.Turtle().shape('circle')
    
screen.bgpic("resources/floorplan.png")

for info in reader.flattened:
    turtles[info[2]].goto(get_point(info[1])[0],get_point(info[1])[1])
    time.sleep(2)
screen.exitonclick()

def get_point(room):
    x1=0
    y1=0
    with open("resources/coordinates2.txt") as coordinates:
        line = coordinates.readline()
        while line:
            if line.split(':')[0] == room:
                x1 = line.split(':')[1].split(',')[0]
                y1 = line.split(':')[1].split(',')[1]
            line = coordinates.readline()
        if (x1+y1)==0:
            raise ValueError("Please enter a valid room number: '{}' was not found".format(room))
    coordinates.close()
    return (x1,y1)

