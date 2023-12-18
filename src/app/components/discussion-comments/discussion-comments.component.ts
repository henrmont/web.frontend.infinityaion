import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CommentService } from '../../services/comment.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-discussion-comments',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './discussion-comments.component.html',
  styleUrl: './discussion-comments.component.scss'
})
export class DiscussionCommentsComponent implements OnInit {

  commentService = inject(CommentService)
  route = inject(ActivatedRoute)

  user: any
  comments: any

  ngOnInit(): void {
    this.route.data.subscribe({
      next: (response: any) => {
        this.user = response.auth
      }
    })
    this.commentService.getTopicComments(this.route.snapshot.paramMap.get('id')).subscribe({
      next: (response: any) => {
        this.comments = response.data
      }
    })
  }

}
