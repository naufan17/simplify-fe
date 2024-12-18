import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
  // standalone: true,
  // imports: [CommonModule],
})

export class FooterComponent {
  footerLinks: { href: string, label: string }[] = [
    { href: "#Home", label: "Home" },
    { href: "#Services", label: "Services" },
  ]

  serviceLinks: { href: string, label: string }[] = [
    { href: "/generate/url", label: "URL Shortener" },
    { href: "/generate/qrcode", label: "QR Code" },
  ]

  dateYear = new Date().getFullYear();
}
