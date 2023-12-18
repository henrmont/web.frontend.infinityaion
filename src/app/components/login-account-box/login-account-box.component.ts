import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { Router, RouterModule } from '@angular/router';
import { AccountService } from '../../services/account.service';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-login-account-box',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule, MatSnackBarModule, FormsModule, ReactiveFormsModule, RouterModule],
  templateUrl: './login-account-box.component.html',
  styleUrl: './login-account-box.component.scss'
})
export class LoginAccountBoxComponent implements OnInit {

  formulario!: FormGroup
  isPasswordChecked: boolean = false
  isEmailExists: boolean = false
  isUsernameExists: boolean = false

  formBuilder = inject(FormBuilder)
  accountService = inject(AccountService)
  commonService = inject(CommonService)
  router = inject(Router)

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required, Validators.minLength(6)]],
    })
  }

  onSubmit() {
    this.accountService.loginAccount(this.formulario.value).subscribe({
      next: (response: any) => {
        window.localStorage.setItem('token', response.access_token)
      },
      error: () => {
        this.commonService.showMessage('Credenciais inválidas.')
      },
      complete: () => {
        this.router.navigate(['/app'])
      }
    })
  }

}
