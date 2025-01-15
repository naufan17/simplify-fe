import { Component } from '@angular/core';
import { NavbarComponent } from '../../shared/layout/navbar/navbar.component';
import { FooterComponent } from '../../shared/layout/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFont, faLink, faEnvelope, faWifi, faHashtag } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FormTextComponent } from './form-text/form-text.component';
import { FormUrlComponent } from './form-url/form-url.component';
import { FormEmailComponent } from './form-email/form-email.component';
import { FormWhatsappComponent } from './form-whatsapp/form-whatsapp.component';
import { FormWifiComponent } from './form-wifi/form-wifi.component';
import { FormSocialMediaComponent } from './form-social-media/form-social-media.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalQrcodeComponent } from '../../shared/ui/modal-qrcode/modal-qrcode.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-page-generate-qrcode',
  imports: [
    CommonModule,
    NavbarComponent,
    FooterComponent,
    FontAwesomeModule,
    FormTextComponent,
    FormUrlComponent,
    FormEmailComponent,
    FormWhatsappComponent,
    FormWifiComponent,
    FormSocialMediaComponent,
    ReactiveFormsModule,
    ModalQrcodeComponent
  ],
  templateUrl: './page-generate-qrcode.component.html',
  styleUrl: './page-generate-qrcode.component.css'
})

export class PageGenerateQrcodeComponent {
  qrcode: string = '';
  selectedOption: string = 'text';
  faFont = faFont;
  faLink = faLink;
  faEnvelope = faEnvelope;
  faWhatsapp = faWhatsapp;
  faWifi = faWifi;
  faHashtag = faHashtag;

  qrcodeOptions: { 
    option: string, 
    name: string, 
    icon: any 
  }[] = [
    {
      option: 'text',
      name: 'Text',
      icon: faFont
    },
    {
      option: 'url',
      name: 'URL',
      icon: faLink
    },
    {
      option: 'email',
      name: 'Email',
      icon: faEnvelope
    },
    {
      option: 'whatsapp',
      name: 'WhatsApp',
      icon: faWhatsapp
    },
    {
      option: 'wifi',
      name: 'WiFi',
      icon: faWifi
    },
    {
      option: 'social-media',
      name: 'Social Media',
      icon: faHashtag
    }
  ];

  handleQrcode(qrcode: string) {
    this.qrcode = qrcode;
  }

  selectOption(option: string) {
    this.selectedOption = option;
  }

  downloadQrcode() {
    const link = document.createElement('a');
    link.href = this.qrcode;
    link.download = 'qrcode.png';
    link.click();
  }

  closeModal() {
    this.qrcode = '';
  }
}
