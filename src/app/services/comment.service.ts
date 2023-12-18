import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { Comment } from '../models/comment.model';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(
    private http: HttpClient
  ) { }

  getTopicComments(id: any): Observable<Comment> {
    return this.http.get<Comment>(`${environment.apiUrl}/get/topic/comments/${id}`)
  }
}
