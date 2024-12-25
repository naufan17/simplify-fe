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

@Component({
  selector: 'app-page-generate-qrcode',
  imports: [
    NavbarComponent,
    FooterComponent,
    FontAwesomeModule,
    FormTextComponent,
    FormUrlComponent,
    FormEmailComponent,
    FormWhatsappComponent,
    FormWifiComponent,
    FormSocialMediaComponent
  ],
  templateUrl: './page-generate-qrcode.component.html',
  styleUrl: './page-generate-qrcode.component.css'
})

export class PageGenerateQrcodeComponent {
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

  selectedOption: string = 'text';
  selectOption(option: string) {
    this.selectedOption = option;
  }
}
