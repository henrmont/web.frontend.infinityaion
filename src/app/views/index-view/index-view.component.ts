import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-index-view',
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './index-view.component.html',
  styleUrl: './index-view.component.scss'
})
export class IndexViewComponent {

}
