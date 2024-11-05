// frontend/src/app/scheduler.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Event {
    start_time: number;
    end_time: number;
}

@Injectable({
    providedIn: 'root'
})
export class SchedulerService {
    private baseUrl = 'http://localhost:3000/api/events';

    constructor(private http: HttpClient) { }

    addEvent(event: Event): Observable<any> {
        return this.http.post(this.baseUrl, event);
    }

    getEvents(): Observable<Event[]> {
        return this.http.get<Event[]>(this.baseUrl);
    }
}
