import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private apiUrl = environment.apiUrl;

  constructor(
    private http: HttpClient,
    private router: Router,
  ) { }

  postLogin(email: string, password: string): any {
    return this.http.post(`${this.apiUrl}/auth/login`, { email, password }).pipe(
      tap((response: any) => {
        localStorage.setItem('accessToken', response.data.accessToken);
      }),
    );
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('accessToken');
  }

  getAccessToken(): string | null {
    return localStorage.getItem('accessToken');
  }

  refreshAccessToken(): any {
    return this.http.get(`${this.apiUrl}/auth/refresh-token`, {}).pipe(
      tap((response: any) => {
        localStorage.setItem('accessToken', response.data.accessToken);
      }),
      catchError((error: any) => {
        this.logout();
        return error;
      })
    );
  }

  postRegister(name: string, email: string, password: string, confirmPassword: string): any {
    return this.http.post(`${this.apiUrl}/auth/register`, { name, email, password, confirmPassword });
  }

  updatePassord(password: string, confirmPassword: string): any {
    const accessToken = this.getAccessToken();
    const headers = { Authorization: `Bearer ${accessToken}` };
    return this.http.post(`${this.apiUrl}/auth/change-password`, { password, confirmPassword }, { headers });
  }

  logout(): void {
    localStorage.removeItem('accessToken');
    this.http.get(`${this.apiUrl}/auth/logout`);
    this.router.navigate(['/login']);
  }
}

