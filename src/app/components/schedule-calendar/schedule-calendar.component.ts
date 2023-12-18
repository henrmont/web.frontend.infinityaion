import { Component } from '@angular/core';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';

@Component({
  selector: 'app-schedule-calendar',
  standalone: true,
  imports: [FullCalendarModule],
  templateUrl: './schedule-calendar.component.html',
  styleUrl: './schedule-calendar.component.scss'
})
export class ScheduleCalendarComponent {
  calendarOptions: CalendarOptions = {
    headerToolbar: false,
    initialView: 'dayGridMonth',
    height: 'auto',
    plugins: [dayGridPlugin],
    dayMaxEventRows: 4,
    events: [
      {title: 'Shugo Emperor', start: '2023-12-12', end: '2023-12-24'},
      {title: 'Krotan Fortress', daysOfWeek: [1,4], startTime: '21:00', color: '#27af42'},
      {title: 'Miren Fortress', daysOfWeek: [2,5], startTime: '21:00'},
      {title: 'Kysis Fortress', daysOfWeek: [3,5], startTime: '21:00'},
      {title: 'Sillus Fortress', daysOfWeek: [5], startTime: '21:00'},
      {title: 'Silona Fortress', daysOfWeek: [6], startTime: '21:00'},
      {title: 'Pradeth Fortress', daysOfWeek: [0], startTime: '21:00'},
      {title: 'Divine Fortress', daysOfWeek: [0], startTime: '21:00'},
      {title: 'Avarice & Crismon', daysOfWeek: [2,4], startTime: '21:00'},
      {title: 'Vorgaten & Crisys', daysOfWeek: [3,5], startTime: '21:00'},
    ]
  };
}
