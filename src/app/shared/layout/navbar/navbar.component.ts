import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})

export class NavbarComponent {
  navbarLinks: { href: string, label: string }[] = [
    { href: "#Home", label: "Home" },
    { href: "#Services", label: "Services" },
  ]
}
