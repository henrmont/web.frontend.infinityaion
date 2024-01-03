import { Component, OnInit, inject } from '@angular/core';
import { NotificationService } from '../../services/notification.service';
import { MatListModule } from '@angular/material/list';
import { NotificationItemComponent } from '../../components/notification-item/notification-item.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-notifications-view',
  standalone: true,
  imports: [CommonModule, MatListModule, NotificationItemComponent],
  templateUrl: './notifications-view.component.html',
  styleUrl: './notifications-view.component.scss'
})
export class NotificationsViewComponent implements OnInit {

  notificationService = inject(NotificationService)

  notifications: any

  ngOnInit(): void {
    this.notificationService.getAllNotifications().subscribe({
      next: (response: any) => {
        this.notifications = response.data
      }
    })
  }

}
