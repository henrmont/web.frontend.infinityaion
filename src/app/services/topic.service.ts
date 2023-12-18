import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { Topic } from '../models/topic.model';

@Injectable({
  providedIn: 'root'
})
export class TopicService {

  constructor(
    private http: HttpClient
  ) { }

  getAllTopics(): Observable<Topic> {
    return this.http.get<Topic>(`${environment.apiUrl}/get/all/topics`)
  }

  getTopic(id: any): Observable<Topic> {
    return this.http.get<Topic>(`${environment.apiUrl}/get/topic/${id}`)
  }
}
