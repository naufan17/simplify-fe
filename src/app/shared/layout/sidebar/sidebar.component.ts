import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../services/auth/auth.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGear, faHouse, faRightFromBracket, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  imports: [
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
  faGear = faGear;

  constructor(private authService: AuthService) {}

  logout() {
    this.authService.logout();
  }
}
