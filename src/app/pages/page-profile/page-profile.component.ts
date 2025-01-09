import { Component } from '@angular/core';
import { SidebarComponent } from '../../shared/layout/sidebar/sidebar.component';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-page-profile',
  imports: [SidebarComponent],
  templateUrl: './page-profile.component.html',
  styleUrl: './page-profile.component.css'
})

export class PageProfileComponent {
  user: { name: string, email: string, phoneNumber: string } = { name: '', email: '', phoneNumber: '' };
  isLoading: boolean = false;

  constructor(private authService: AuthService) {
    this.user = this.authService.getProfile().subscribe((response: any) => {
      if(response.statusCode === 200) {
        this.user = response.data.user;
      } else {
        console.error('Unexpected response code', response.message);
      }
    });
  }
}
