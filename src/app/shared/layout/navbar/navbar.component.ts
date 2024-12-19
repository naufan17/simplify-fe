import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})

export class NavbarComponent {
  navbarLinks: { href: string, label: string }[] = [
    { href: "/", label: "Home" },
    { href: "#Services", label: "Services" },
  ]
}
