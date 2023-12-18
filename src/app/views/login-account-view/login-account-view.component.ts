import { Component } from '@angular/core';
import { LoginAccountBoxComponent } from '../../components/login-account-box/login-account-box.component';

@Component({
  selector: 'app-login-account-view',
  standalone: true,
  imports: [LoginAccountBoxComponent],
  templateUrl: './login-account-view.component.html',
  styleUrl: './login-account-view.component.scss'
})
export class LoginAccountViewComponent {

}
