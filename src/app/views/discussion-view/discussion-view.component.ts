import { Component } from '@angular/core';
import { DiscussionContentComponent } from '../../components/discussion-content/discussion-content.component';
import { DiscussionCommentsComponent } from '../../components/discussion-comments/discussion-comments.component';

@Component({
  selector: 'app-discussion-view',
  standalone: true,
  imports: [DiscussionContentComponent, DiscussionCommentsComponent],
  templateUrl: './discussion-view.component.html',
  styleUrl: './discussion-view.component.scss'
})
export class DiscussionViewComponent {

}
