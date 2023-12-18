import { Component } from '@angular/core';
import { DiscussionsListComponent } from '../../components/discussions-list/discussions-list.component';

@Component({
  selector: 'app-discussions-view',
  standalone: true,
  imports: [DiscussionsListComponent],
  templateUrl: './discussions-view.component.html',
  styleUrl: './discussions-view.component.scss'
})
export class DiscussionsViewComponent {

}
