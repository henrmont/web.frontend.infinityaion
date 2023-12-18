import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Account } from '../models/account.model';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(
    private http: HttpClient
  ) { }

  createAccount(data: Account): Observable<Account> {
    return this.http.post<Account>(`${environment.apiUrl}/create/account`, data)
  }

  checkEmailExist(data: Account): Observable<Account> {
    return this.http.get<Account>(`${environment.apiUrl}/check/email/exist/${data}`)
  }

  checkUsernameExist(data: Account): Observable<Account> {
    return this.http.get<Account>(`${environment.apiUrl}/check/username/exist/${data}`)
  }

  loginAccount(data: Account): Observable<Account> {
    return this.http.post<Account>(`${environment.apiUrl}/auth/login`, data)
  }

  recoverAccount(data: Account): Observable<Account> {
    return this.http.post<Account>(`${environment.apiUrl}/create/account`, data)
  }

  resetAccount(data: Account): Observable<Account> {
    return this.http.post<Account>(`${environment.apiUrl}/create/account`, data)
  }

  refreshToken(): Observable<any> {
    const requestOptions = {
      'Authorization': `Bearer ${window.localStorage.getItem('token')}`
    }
    return this.http.get<any>(`${environment.apiUrl}/auth/refresh`, {headers: requestOptions})
  }

  getCredentials(): Observable<any> {
    const requestOptions = {
      'Authorization': `Bearer ${window.localStorage.getItem('token')}`
    }
    return this.http.get<any>(`${environment.apiUrl}/auth/me`, {headers: requestOptions})
  }
}
