import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class QrcodeService {
  private apiUrl = environment.apiUrl;
  
  constructor(private http: HttpClient) {}

  postQrcodeText(text: string) {
    return this.http.post(`${this.apiUrl}/qrcode/text`, { text })
  }

  postQrcodeUrl(url: string) {
    return this.http.post(`${this.apiUrl}/qrcode/url`, { url })
  }

  postQrcodeEmail(email: string) {
    return this.http.post(`${this.apiUrl}/qrcode/email`, { email })
  }

  postQrcodeWhatsapp(whatsapp: string) {
    return this.http.post(`${this.apiUrl}/qrcode/whatsapp`, { whatsapp })
  }

  postQrcodeWifi(ssid: string, password: string, encryption: string) {
    return this.http.post(`${this.apiUrl}/qrcode/wifi`, { ssid, password, encryption })
  }

  postQrcodeSocialMedia(username: string, socialMedia: string) {
    return this.http.post(`${this.apiUrl}/qrcode/social-media`, { username, socialMedia })
  }
}
