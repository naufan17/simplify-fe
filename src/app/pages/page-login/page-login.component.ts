import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { LoadingButtonComponent } from '../../shared/ui/loading-button/loading-button.component';
import { AlertErrorComponent } from '../../shared/ui/alert-error/alert-error.component';

@Component({
  selector: 'app-page-login',
  imports: [
    RouterLink,
    ReactiveFormsModule,
    LoadingButtonComponent,
    AlertErrorComponent
  ],
  templateUrl: './page-login.component.html',
  styleUrl: './page-login.component.css'
})

export class PageLoginComponent {
  isLoading: boolean = false;
  errorMessage: string = '';
  loginForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  onSubmit() {
    if(this.loginForm.valid) {
      this.isLoading = true;
      this.authService.postLogin(
        this.loginForm.value.email ?? '', 
        this.loginForm.value.password ?? ''
      ).subscribe((response: any) => {
        this.isLoading = false;
        if (response.statusCode === 200) {
          this.router.navigate(['dashboard']);
        } else {
          this.errorMessage = response.message;
        }
      }, (error: any) => {
        this.isLoading = false;
        this.errorMessage = "Email or password is incorrect";
        console.error('Login failed', error);
      });
    }
  }

  clearMessage() {
    this.errorMessage = '';
  }
}
