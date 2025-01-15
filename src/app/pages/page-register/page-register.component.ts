import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { LoadingButtonComponent } from '../../shared/ui/loading-button/loading-button.component';
import { AlertSuccessComponent } from '../../shared/ui/alert-success/alert-success.component';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, ValidatorFn } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { AlertErrorComponent } from '../../shared/ui/alert-error/alert-error.component';

@Component({
  selector: 'app-page-register',
  imports: [
    RouterLink,
    ReactiveFormsModule,
    LoadingButtonComponent,
    AlertErrorComponent,
    AlertSuccessComponent
  ],
  templateUrl: './page-register.component.html',
  styleUrl: './page-register.component.css'
})

export class PageRegisterComponent {
  isLoading: boolean = false;
  errorMessage: string = '';
  successMessage: string = '';

  passwordMatchValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const formGroup: FormGroup = control as FormGroup;
    const password: string = formGroup.get('password')?.value;
    const confirmPassword: string = formGroup.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { mismatch: true };
  }

  registerForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl('')
  }, { validators: [this.passwordMatchValidator] });

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  onSubmit() {
    if (this.registerForm.valid) {
      this.isLoading = true;
      this.authService.postRegister(
        this.registerForm.value.name ?? '',
        this.registerForm.value.email ?? '',
        this.registerForm.value.password ?? '',
        this.registerForm.value.confirmPassword ?? ''
      ).subscribe((response: any) => {
        this.isLoading = false;
        if (response.statusCode === 201) {
          this.isLoading = false;
          this.successMessage = "Registration successful, you will be redirected to the login page in 5 seconds";
          setTimeout(() => {
            this.router.navigate(['login']);            
          }, 5000)
        } else {
          this.errorMessage = response.message;
        }
      }, (error: any) => {
        this.isLoading = false;
        this.errorMessage = "Email or password is incorrect";
        console.error('Registration failed', error);
      });
    }
  }

  clearMessage() {
    this.errorMessage = '';
  }
}