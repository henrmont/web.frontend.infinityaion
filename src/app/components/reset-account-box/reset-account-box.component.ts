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
  selector: 'app-reset-account-box',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule, MatSnackBarModule, FormsModule, ReactiveFormsModule, RouterModule],
  templateUrl: './reset-account-box.component.html',
  styleUrl: './reset-account-box.component.scss'
})
export class ResetAccountBoxComponent implements OnInit {

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

  onSubmit() {
    this.accountService.resetAccount(this.formulario.value).subscribe({
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
