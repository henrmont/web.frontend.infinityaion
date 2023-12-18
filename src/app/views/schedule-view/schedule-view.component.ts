import { Component } from '@angular/core';
import { ScheduleCalendarComponent } from '../../components/schedule-calendar/schedule-calendar.component';

@Component({
  selector: 'app-schedule-view',
  standalone: true,
  imports: [ScheduleCalendarComponent],
  templateUrl: './schedule-view.component.html',
  styleUrl: './schedule-view.component.scss'
})
export class ScheduleViewComponent {

}
