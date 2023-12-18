import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { Router, RouterModule } from '@angular/router';
import { AccountService } from '../../services/account.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CommonService } from '../../services/common.service';


@Component({
  selector: 'app-create-account-box',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule, MatSnackBarModule, FormsModule, ReactiveFormsModule, RouterModule],
  templateUrl: './create-account-box.component.html',
  styleUrl: './create-account-box.component.scss'
})
export class CreateAccountBoxComponent implements OnInit {

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
      email: [null, [Validators.required, Validators.email]],
      username: [null, [Validators.required]],
      password: [null, [Validators.required, Validators.minLength(6)]],
      cpassword: [null, [Validators.required, Validators.minLength(6)]]
    })
  }

  checkPassword() {
    if (this.formulario.get('password')?.value == this.formulario.get('cpassword')?.value) {
      this.isPasswordChecked = true
    } else {
      this.isPasswordChecked = false
    }
  }

  checkEmailExist() {
    this.accountService.checkEmailExist(this.formulario.get('email')?.value).subscribe({
      next: (response: any) => {
        if (response.data.length > 0) {
          this.isEmailExists = true
        } else {
          this.isEmailExists = false
        }
      }
    })
  }

  checkUsernameExist() {
    this.accountService.checkUsernameExist(this.formulario.get('username')?.value).subscribe({
      next: (response: any) => {
        if (response.data.length > 0) {
          this.isUsernameExists = true
        } else {
          this.isUsernameExists = false
        }
      }
    })
  }

  onSubmit() {
    console.log(this.formulario)
    this.accountService.createAccount(this.formulario.value).subscribe({
      next: () => {
        this.commonService.showMessage('Usuário criado com sucesso.')
      },
      error: () => {
        this.commonService.showMessage('Erro no sistema.')
      },
      complete: () => {
        this.router.navigate(['/'])
      }
    })
  }

}
