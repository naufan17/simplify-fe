import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
  imports: [RouterLink],
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
