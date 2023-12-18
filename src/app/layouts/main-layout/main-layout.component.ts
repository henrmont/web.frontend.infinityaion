import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterModule, RouterOutlet } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import { CommonService } from '../../services/common.service';
import {MatMenuModule} from '@angular/material/menu';
import { NotificationService } from '../../services/notification.service';
import {MatBadgeModule} from '@angular/material/badge';






@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatSidenavModule, MatToolbarModule, MatButtonModule, MatIconModule, RouterModule, MatListModule, MatDividerModule, MatMenuModule, MatBadgeModule],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent implements OnInit {

  commonService = inject(CommonService)
  notificationService = inject(NotificationService)
  route = inject(ActivatedRoute);

  user: any
  badgeNotifications: any = null
  flashNotifications: any = null
  notifications: any

  ngOnInit(): void {
    this.route.data.subscribe({
      next: (response: any) => {
        this.user = response.auth
      }
    })
    this.notificationService.getUnreadNotifications().subscribe({
      next: (response: any) => {
        if (response.data.length > 0) {
          this.badgeNotifications = response.data.length
        }
      }
    })
    this.notificationService.getFlashNotifications().subscribe({
      next: (response: any) => {
        if (response.data.length > 0) {
          this.flashNotifications = response.data.length
        }
        this.notifications = response.data
      }
    })
  }

  readNotifications() {
    this.badgeNotifications = null
    this.notificationService.setReadNotifications().subscribe({})
  }

}
