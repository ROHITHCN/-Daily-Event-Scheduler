// frontend/src/app/add-event/add-event.component.ts
import { Component } from '@angular/core';
import { SchedulerService } from '../scheduler.service';

@Component({
    selector: 'app-add-event',
    templateUrl: './add-event.component.html'
})
export class AddEventComponent {
    start_time!: number;
    end_time!: number;
    message: string = '';

    constructor(private schedulerService: SchedulerService) { }

    addEvent() {
        this.schedulerService.addEvent({ start_time: this.start_time, end_time: this.end_time }).subscribe(
            response => {
                if (response.success) {
                    this.message = 'Event added successfully';
                } else {
                    this.message = 'Event overlaps with an existing event';
                }
            },
            error => {
                console.error('Error:', error);
            }
        );
    }
}
