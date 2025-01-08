import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-page-login',
  imports: [
    RouterLink,
    ReactiveFormsModule
  ],
  templateUrl: './page-login.component.html',
  styleUrl: './page-login.component.css'
})

export class PageLoginComponent {
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  onSubmit() {
    if(this.loginForm.valid) {
      this.authService.postLogin(
        this.loginForm.value.email ?? '', 
        this.loginForm.value.password ?? ''
      ).subscribe((response: any) => {
        if (response.statusCode === 200) {
          this.router.navigate(['dashboard']);
          console.log('Login successful', response);
        } else {
          console.error('Unexpected response code', response.message);
        }
      });
    }
  }
}
