import { Component } from '@angular/core';
import { faCheck, faLink, faQrcode, faChevronDown } from '@fortawesome/free-solid-svg-icons';
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
  faChevronDown = faChevronDown;
  openedIndex: number | null = null;

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

  frequentlyAskedQuestions = [
    {
      question: 'What is Simplify?',
      answer: 'Simplify is a service to shorten url and generate QR code to share with others.'
    }, 
    {
      question: 'How to generate URL Shortener?',
      answer: 'You can input your long URL to generate short URL.'
    },
    {
      question: 'How to generate QR Code?',
      answer: 'You can choose option and input your data to generate QR code.'
    },
    {
      question: 'What is QR Code?',
      answer: 'QR Code is a type of code that can be read by a QR code reader.'
    },
  ]

  toggleAccordion(index: number): void {
    this.openedIndex = this.openedIndex === index ? null : index;
  }
}
