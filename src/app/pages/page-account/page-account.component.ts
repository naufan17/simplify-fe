import { Component } from '@angular/core';
import { SidebarComponent } from '../../shared/layout/sidebar/sidebar.component';
import { AuthService } from '../../services/auth/auth.service';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { UpdatePasswordComponent } from './update-password/update-password.component';

@Component({
  selector: 'app-page-account',
  imports: [
    SidebarComponent,
    UpdateProfileComponent,
    UpdatePasswordComponent
  ],
  templateUrl: './page-account.component.html',
  styleUrl: './page-account.component.css'
})

export class PageAccountComponent {
}
