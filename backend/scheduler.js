// backend/scheduler.js
class Scheduler {
    constructor() {
        this.events = []; // Store events in {start_time, end_time} format
    }

    addEvent(event) {
        // Check for overlap with existing events
        for (const existingEvent of this.events) {
            if (
                (event.start_time >= existingEvent.start_time && event.start_time < existingEvent.end_time) ||
                (event.end_time > existingEvent.start_time && event.end_time <= existingEvent.end_time)
            ) {
                return false; // Overlap found
            }
        }
        this.events.push(event); // Add event if no overlap
        return true;
    }

    getEvents() {
        return this.events;
    }
}

module.exports = Scheduler;
