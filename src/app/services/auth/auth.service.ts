import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private apiUrl = environment.apiUrl;

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  postLogin(email: string, password: string) {
    return this.http.post(`${this.apiUrl}/auth/login`, { email, password }).pipe(
      tap((response: any) => {
        localStorage.setItem('accessToken', response.data.accessToken);
      }),
    );
  }

  isLoggedIn() {
    return !!localStorage.getItem('accessToken');
  }

  getAccessToken() {
    return localStorage.getItem('accessToken');
  }

  refreshAccessToken() {
    return this.http.post(`${this.apiUrl}/auth/refresh-token`, {}).pipe(
      tap((response: any) => {
        localStorage.setItem('accessToken', response.data.accessToken);
      }),
      catchError((error: any) => {
        this.logout();
        return error;
      })
    );
  }

  postRegister(name: string, email: string, password: string, confirmPassword: string) {
    return this.http.post(`${this.apiUrl}/auth/register`, { name, email, password, confirmPassword });
  }

  logout() {
    localStorage.removeItem('accessToken');
    this.router.navigate(['/login']);
  }
}

