import { Component, OnInit, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TopicService } from '../../services/topic.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-discussions-list',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, RouterModule],
  templateUrl: './discussions-list.component.html',
  styleUrl: './discussions-list.component.scss'
})
export class DiscussionsListComponent implements OnInit {

  topicService = inject(TopicService)

  topics: any

  ngOnInit(): void {
    this.topicService.getAllTopics().subscribe({
      next: (response: any) => {
        this.topics = response.data
      }
    })
  }

}
