import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})

export class QrcodeService {
  private apiUrl = environment.apiUrl;
  
  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) {}

  getQrCode(filter?: 'text' | 'url' | 'email' | 'whatsapp' | 'wifi' | 'social media'): any {
    const accessToken: string | null = this.authService.getAccessToken();
    const headers: { Authorization: string } | {} = accessToken ? { Authorization: `Bearer ${accessToken}` } : {};
    const params: { filter?: string } = filter ? { filter } : {};

    return this.http.get(`${this.apiUrl}/qrcode/history`, { headers, params });
  }

  postQrcodeText(text: string): any {
    const accessToken: string | null = this.authService.getAccessToken();
    const headers: { Authorization: string } | {} = accessToken ? { Authorization: `Bearer ${accessToken}` } : {};

    return this.http.post(`${this.apiUrl}/qrcode/text`, { text }, { headers });
  }

  postQrcodeUrl(url: string): any {
    const accessToken: string | null = this.authService.getAccessToken();
    const headers: { Authorization: string } | {} = accessToken ? { Authorization: `Bearer ${accessToken}` } : {};

    return this.http.post(`${this.apiUrl}/qrcode/url`, { url }, { headers });
  }

  postQrcodeEmail(email: string): any {
    const accessToken: string | null = this.authService.getAccessToken();
    const headers: { Authorization: string } | {} = accessToken ? { Authorization: `Bearer ${accessToken}` } : {};

    return this.http.post(`${this.apiUrl}/qrcode/email`, { email }, { headers });
  }

  postQrcodeWhatsapp(whatsapp: string): any {
    const accessToken: string | null = this.authService.getAccessToken();
    const headers: { Authorization: string } | {} = accessToken ? { Authorization: `Bearer ${accessToken}` } : {};

    return this.http.post(`${this.apiUrl}/qrcode/whatsapp`, { whatsapp }, { headers });
  }

  postQrcodeWifi(ssid: string, password: string, encryption: string): any {
    const accessToken: string | null = this.authService.getAccessToken();
    const headers: { Authorization: string } | {} = accessToken ? { Authorization: `Bearer ${accessToken}` } : {};

    return this.http.post(`${this.apiUrl}/qrcode/wifi`, { ssid, password, encryption }, { headers });
  }

  postQrcodeSocialMedia(username: string, socialMedia: string): any {
    const accessToken: string | null = this.authService.getAccessToken();
    const headers: { Authorization: string } | {} = accessToken ? { Authorization: `Bearer ${accessToken}` } : {};

    return this.http.post(`${this.apiUrl}/qrcode/social-media`, { username, socialMedia }, { headers });
  }
}
