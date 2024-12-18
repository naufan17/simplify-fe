import { Component } from '@angular/core';
import { faCheck, faLink, faQrcode } from '@fortawesome/free-solid-svg-icons';
import { NavbarComponent } from '../../shared/layout/navbar/navbar.component';
import { FooterComponent } from '../../shared/layout/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-page-home',
  imports: [
    RouterLink,
    FontAwesomeModule,
    NavbarComponent, 
    FooterComponent
  ],
  templateUrl: './page-home.component.html',
  styleUrl: './page-home.component.css'
})

export class PageHomeComponent {
  faLink = faLink;
  faQrcode = faQrcode;
  faCheck = faCheck;

  featureShortenUrl = [
    'Custom your link',
    'Redirect to the original URL',
    'Analtytics and tracking',
  ]

  featureQrCode = [
    'Many option to choose',
    'Fully customizable your QR Code',
    'Analtytics and tracking',
  ]
}
