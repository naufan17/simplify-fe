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

  constructor(private qrcodeService: QrcodeService) {
    this.qrCodeHistory = this.qrcodeService.getQrCode().subscribe((response: any) => {
      if(response.statusCode === 200) {
        this.qrCodeHistory = response.data.qrcode;
      } else {
        console.error('Unexpected response code', response.message);
      }
    });
  }

  onFilterChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    this.selectedFilter = selectElement.value;
    if(this.selectedFilter === 'text') this.qrCodeHistory = this.qrCodeHistory.filter(qrCode => qrCode.type === 'text');
    if(this.selectedFilter === 'url') this.qrCodeHistory = this.qrCodeHistory.filter(qrCode => qrCode.type === 'url');
    if(this.selectedFilter === 'email') this.qrCodeHistory = this.qrCodeHistory.filter(qrCode => qrCode.type === 'email');
    if(this.selectedFilter === 'whatsapp') this.qrCodeHistory = this.qrCodeHistory.filter(qrCode => qrCode.type === 'whatsapp');
    if(this.selectedFilter === 'wifi') this.qrCodeHistory = this.qrCodeHistory.filter(qrCode => qrCode.type === 'wifi');
    if(this.selectedFilter === 'social-media') this.qrCodeHistory = this.qrCodeHistory.filter(qrCode => qrCode.type === 'social media');
  }

  formatDate(dateString: Date): string {
    const date = new Date(dateString);
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
  } 
}
