import { Component, OnInit, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-discussion-content',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, MatDividerModule],
  templateUrl: './discussion-content.component.html',
  styleUrl: './discussion-content.component.scss'
})
export class DiscussionContentComponent implements OnInit {

  route = inject(ActivatedRoute)

  discussion: any

  ngOnInit(): void {
    this.route.data.subscribe({
      next: (response: any) => {
        this.discussion = response.topic.data
      }
    })
  }

}
