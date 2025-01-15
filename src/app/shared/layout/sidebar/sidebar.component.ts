import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../services/auth/auth.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faKey, faHouse, faRightFromBracket, faUser, faQrcode, faLink } from '@fortawesome/free-solid-svg-icons';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  imports: [
    CommonModule,
    RouterLink,
    FontAwesomeModule
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})

export class SidebarComponent {
  faHouse = faHouse;
  faRightFromBracket = faRightFromBracket;
  faUser = faUser;
  faKey = faKey;
  faQrcode = faQrcode;
  faLink = faLink;
  logo = '/src/assets/logo/simplify.svg';
  isActive = false;

  navbarLinksUp: { href: string, label: string, icon: any }[] = [
    { href: "/dashboard", label: "Dashboard", icon: faHouse },
    { href: "/qrcode", label: "QR Code", icon: faQrcode },
    { href: "/shorten-url", label: "URL Shortener", icon: faLink },
  ];

  navbarLinksDown: { href: string, label: string, icon: any }[] = [
    { href: "/account", label: "Account", icon: faUser },
    { href: "/api-key", label: "API Key", icon: faKey },
  ];

  constructor(private authService: AuthService, private router: Router) {}

  isRouteActive(href: string): boolean {
    return this.router.url === href;
  }

  logout(): void {
    this.authService.logout();
  }
}
