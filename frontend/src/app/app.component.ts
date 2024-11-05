import { Component } from '@angular/core';

interface Event {
  name: string;
  start_time: number;
  end_time: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  eventName: string = '';
  startTime: number | null = null; // Start time can be null initially
  endTime: number | null = null; // End time can be null initially
  events: Event[] = [];
  message: string | null = null;
  errorMessage: string | null = null;

  addEvent() {
    // Input validation
    if (!this.validateInput()) {
      return; // Stop execution if validation fails
    }

    // Create a new event
    const newEvent: Event = {
      name: this.eventName,
      start_time: this.startTime!,
      end_time: this.endTime!
    };

    // Add event to the list
    this.events.push(newEvent);

    // Clear inputs
    this.eventName = '';
    this.startTime = null;
    this.endTime = null;

    // Show success message
    this.showMessage("Event added successfully!", "success");
  }

  validateInput(): boolean {
    // Check if event name is provided
    if (!this.eventName.trim()) {
      this.showMessage("Event name must be provided.", "error");
      return false;
    }

    // Check if start and end times are valid numbers
    if (this.startTime === null) {
      this.showMessage("Start time must be provided.", "error");
      return false;
    }

    if (this.endTime === null) {
      this.showMessage("end time must be provided.", "error");
      return false;
    }

    // Check if end time is greater than start time
    if (this.endTime <= this.startTime) {
      this.showMessage("End time must be greater than start time.", "error");
      return false;
    }

    // Check for overlapping events
    for (const event of this.events) {
      if (
        (this.startTime! >= event.start_time && this.startTime! < event.end_time) ||
        (this.endTime! > event.start_time && this.endTime! <= event.end_time) ||
        (this.startTime! <= event.start_time && this.endTime! >= event.end_time)
      ) {
        this.showMessage("Event times overlap with an existing event.", "error");
        return false;
      }
    }

    return true; // All validations passed
  }

  showMessage(msg: string, type: 'success' | 'error') {
    if (type === 'success') {
      this.message = msg;
      this.errorMessage = null; // Clear error message
    } else {
      this.errorMessage = msg;
      this.message = null; // Clear success message
    }

    // Hide the message after a few seconds
    setTimeout(() => {
      this.message = null;
      this.errorMessage = null;
    }, 3000); // Message disappears after 3 seconds
  }

  getEvents(): Event[] {
    return this.events;
  }
}
