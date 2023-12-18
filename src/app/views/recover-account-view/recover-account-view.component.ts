import { Component } from '@angular/core';
import { RecoverAccountBoxComponent } from '../../components/recover-account-box/recover-account-box.component';

@Component({
  selector: 'app-recover-account-view',
  standalone: true,
  imports: [RecoverAccountBoxComponent],
  templateUrl: './recover-account-view.component.html',
  styleUrl: './recover-account-view.component.scss'
})
export class RecoverAccountViewComponent {

}
