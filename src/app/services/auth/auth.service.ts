import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  postLogin(email: string, password: string) {
    return this.http.post(`${this.apiUrl}/auth/login`, { email, password });
  }

  postRegister(name: string, email: string, password: string, confirmPassword: string) {
    return this.http.post(`${this.apiUrl}/auth/register`, { name, email, password, confirmPassword });
  }
}
