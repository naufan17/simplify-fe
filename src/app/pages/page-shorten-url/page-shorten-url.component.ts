import { Component } from '@angular/core';
import { SidebarComponent } from '../../shared/layout/sidebar/sidebar.component';
import { ShortenUrlService } from '../../services/shorten-url/shorten-url.service';

@Component({
  selector: 'app-page-shorten-url',
  imports: [SidebarComponent],
  templateUrl: './page-shorten-url.component.html',
  styleUrl: './page-shorten-url.component.css'
})

export class PageShortenUrlComponent {
  shortenUrlHistory: {
    id: number;
    urlOrigin: string;
    urlId: string;
    urlShort: string;
    createdAt: Date;
  }[] = [];
  isLoading: boolean = true

  constructor(private shortenUrlService: ShortenUrlService) {
    this.shortenUrlHistory = this.shortenUrlService.getShortUrl().subscribe((response: any) => {
      if(response.statusCode === 200) {
        this.isLoading = false;
        this.shortenUrlHistory = response.data.url;
      } else {
        this.isLoading = false;
        console.error('Unexpected response code', response.message);
      }
    },
    (error: any) => {
      this.isLoading = false;
      console.error('Error fetching shorten url history', error);
    });
  }

  formatDate(dateString: Date): string {
    const date = new Date(dateString);
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
  }
}
