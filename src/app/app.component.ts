import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./shared/layout/navbar/navbar.component";
import { FooterComponent } from "./shared/layout/footer/footer.component";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLink, faQrcode, faCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    // RouterOutlet, 
    FontAwesomeModule,
    NavbarComponent, 
    FooterComponent
  ]
})

export class AppComponent {
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
