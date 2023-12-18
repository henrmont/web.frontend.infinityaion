import { Component } from '@angular/core';
import { CreateAccountBoxComponent } from '../../components/create-account-box/create-account-box.component';

@Component({
  selector: 'app-create-account-view',
  standalone: true,
  imports: [CreateAccountBoxComponent],
  templateUrl: './create-account-view.component.html',
  styleUrl: './create-account-view.component.scss'
})
export class CreateAccountViewComponent {

}
