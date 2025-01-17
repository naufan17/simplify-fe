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
    private cookieService: CookieService
  ) { }

  postLogin(email: string, password: string): any {
    return this.http.post(`${this.apiUrl}/auth/login`, { email, password }, { withCredentials: true }).pipe(
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

  removeAccessToken(): void {
    localStorage.removeItem('accessToken');
  }

  refreshAccessToken(): any {
    return this.http.get(`${this.apiUrl}/auth/refresh-token`, { withCredentials: true }).pipe(
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
    const accessToken: string | null = this.getAccessToken();
    const headers: { Authorization: string } = { Authorization: `Bearer ${accessToken}` };

    return this.http.post(`${this.apiUrl}/auth/change-password`, { password, confirmPassword }, { headers, withCredentials: true });
  }

  logout(): void {
    this.http.get(`${this.apiUrl}/auth/logout`, { withCredentials: true }).subscribe(() => {
      this.removeAccessToken();
      this.cookieService.delete('refreshToken');
      this.router.navigate(['/login']);
    })
  }
}

