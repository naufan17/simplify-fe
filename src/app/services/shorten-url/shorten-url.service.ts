import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})

export class ShortenUrlService {
  private apiUrl = environment.apiUrl;
  
  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) {}

  getShortUrl(): any {
    const accessToken: string | null = this.authService.getAccessToken();
    const headers: { Authorization: string } | {} = accessToken ? { Authorization: `Bearer ${accessToken}` } : {};

    return this.http.get(`${this.apiUrl}/shorten-url/history`, { headers, withCredentials: true });
  }

  postShortUrl(urlOrigin: string, alias?: string): any {
    const accessToken: string | null = this.authService.getAccessToken();
    const headers: { Authorization: string } | {} = accessToken ? { Authorization: `Bearer ${accessToken}` } : {};

    return this.http.post(`${this.apiUrl}/shorten-url`, { urlOrigin, alias }, { headers, withCredentials: true });
  }
}
