import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private apiUrl = environment.apiUrl;

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { }

  getProfile(): any {
    const accessToken: string | null = this.authService.getAccessToken();
    const headers: { Authorization: string } = { Authorization: `Bearer ${accessToken}` };
    return this.http.get(`${this.apiUrl}/user/profile`, { headers });
  }

  updateProfile(name: string, email: string, phoneNumber: string): any {
    const accessToken: string | null = this.authService.getAccessToken();
    const headers: { Authorization: string } = { Authorization: `Bearer ${accessToken}` };
    return this.http.post(`${this.apiUrl}/user/profile`, { name, email, phoneNumber }, { headers });
  }
}
