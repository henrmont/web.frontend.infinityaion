import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { Notification } from '../models/notification.model';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(
    private http: HttpClient
  ) { }

  getUnreadNotifications(): Observable<Notification> {
    return this.http.get<Notification>(`${environment.apiUrl}/get/unread/notifications`)
  }

  getFlashNotifications(): Observable<Notification> {
    return this.http.get<Notification>(`${environment.apiUrl}/get/flash/notifications`)
  }

  getAllNotifications(): Observable<Notification> {
    return this.http.get<Notification>(`${environment.apiUrl}/get/all/notifications`)
  }

  setReadNotifications(): Observable<Notification> {
    return this.http.get<Notification>(`${environment.apiUrl}/set/read/notifications`)
  }
}
