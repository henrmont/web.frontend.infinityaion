import { Component, OnInit, inject } from '@angular/core';
import { NotificationsListComponent } from '../../components/notifications-list/notifications-list.component';

@Component({
  selector: 'app-notifications-view',
  standalone: true,
  imports: [NotificationsListComponent],
  templateUrl: './notifications-view.component.html',
  styleUrl: './notifications-view.component.scss'
})
export class NotificationsViewComponent {

}
