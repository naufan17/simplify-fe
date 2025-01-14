import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../services/auth/auth.service';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})

export class NavbarComponent {
  isSidebarOpen: boolean = false;
  isLoggedIn: boolean;
  logo = '/src/assets/logo/simplify.svg';

  constructor(private authService: AuthService) {
    this.isLoggedIn = this.authService.isLoggedIn();
  }

  toggleSidebar(): void {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  navbarLinks: { href: string, label: string }[] = [
    { href: "#Services", label: "Services" },
    { href: "#IntegrateApi", label: "API's" },
    { href: "#FAQ", label: "FAQ" },
  ]
}
