import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ShortenUrlService {
  private apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}

  postShortUrl(urlOrigin: string, alias?: string): any {
    return this.http.post(`${this.apiUrl}/shorten-url`, {
      urlOrigin,
      alias
    })
  }
}
