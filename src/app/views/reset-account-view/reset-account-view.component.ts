import { Component } from '@angular/core';
import { ResetAccountBoxComponent } from '../../components/reset-account-box/reset-account-box.component';

@Component({
  selector: 'app-reset-account-view',
  standalone: true,
  imports: [ResetAccountBoxComponent],
  templateUrl: './reset-account-view.component.html',
  styleUrl: './reset-account-view.component.scss'
})
export class ResetAccountViewComponent {

}
