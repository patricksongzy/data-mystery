import time

class Event:
    def __init__(self, location, device, action, is_occupied):
        self.device = device
        self.action = action
        self.location = location
        self.is_occupied = is_occupied

    def __str__(self):
        return self.action + " at " + self.location
