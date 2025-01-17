import { Component } from '@angular/core';
import { SidebarComponent } from '../../shared/layout/sidebar/sidebar.component';
import { QrcodeService } from '../../services/qrcode/qrcode.service';
import { response } from 'express';

@Component({
  selector: 'app-page-qrcode',
  imports: [SidebarComponent],
  templateUrl: './page-qrcode.component.html',
  styleUrl: './page-qrcode.component.css'
})

export class PageQrcodeComponent {
  qrCodeHistory: {
    id: number;
    type: string;
    payload: string;
    qrcode: string;
    createdAt: Date;
  }[] = [];
  selectedFilter: string = '';
  isLoading: boolean = true;

  constructor(private qrcodeService: QrcodeService) {
    this.qrCodeHistory = this.qrcodeService.getQrCode().subscribe((response: any) => {
      if(response.statusCode === 200) {
        this.isLoading = false;
        this.qrCodeHistory = response.data.qrcode;
      } else {
        this.isLoading = false;
        console.error('Unexpected response code', response.message);
      }
    },
    (error: any) => {
      this.isLoading = false;
      console.error('Error fetching qrcode history', error);
    });
  }

  onFilterChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    this.selectedFilter = selectElement.value;
    if(this.selectedFilter === 'text') this.filteredQrCodeHistory('text');
    if(this.selectedFilter === 'url') this.filteredQrCodeHistory('url');
    if(this.selectedFilter === 'email') this.filteredQrCodeHistory('email');
    if(this.selectedFilter === 'whatsapp') this.filteredQrCodeHistory('whatsapp');
    if(this.selectedFilter === 'wifi') this.filteredQrCodeHistory('wifi');
    if(this.selectedFilter === 'social-media') this.filteredQrCodeHistory('social media');
  }

  filteredQrCodeHistory(filter: 'text' | 'url' | 'email' | 'whatsapp' | 'wifi' | 'social media'): void {
    this.qrCodeHistory = this.qrcodeService.getQrCode(filter).subscribe((response: any) => {
      if(response.statusCode === 200) {
        this.isLoading = false;
        this.qrCodeHistory = response.data.qrcode;
      } else {
        this.isLoading = false;
        console.error('Unexpected response code', response.message);
      }
    },
    (error: any) => {
      this.isLoading = false;
      console.error('Error fetching qr code history', error);
    });
  }

  formatDate(dateString: Date): string {
    const date = new Date(dateString);
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
  } 
}
