import time

class Event:
    def __init__(self, location, device, action, is_event_flagged):
        self.device = device
        self.action = action
        self.location = location
        self.is_event_flagged = is_event_flagged

    def __str__(self):
        return self.action + " at " + self.location
