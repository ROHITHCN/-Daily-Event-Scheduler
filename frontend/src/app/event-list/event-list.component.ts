// frontend/src/app/event-list/event-list.component.ts
import { Component, OnInit } from '@angular/core';
import { SchedulerService } from '../scheduler.service';

@Component({
    selector: 'app-event-list',
    templateUrl: './event-list.component.html'
})
export class EventListComponent implements OnInit {
    events: { start_time: number; end_time: number }[] = [];

    constructor(private schedulerService: SchedulerService) { }

    ngOnInit() {
        this.schedulerService.getEvents().subscribe(events => {
            this.events = events;
        });
    }
}
