import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { LoadingButtonComponent } from '../../../shared/ui/loading-button/loading-button.component';
import { AlertSuccessComponent } from '../../../shared/ui/alert-success/alert-success.component';
import { AuthService } from '../../../services/auth/auth.service';
import { AlertErrorComponent } from '../../../shared/ui/alert-error/alert-error.component';

@Component({
  selector: 'app-update-password',
  imports: [
    ReactiveFormsModule,
    LoadingButtonComponent,
    AlertSuccessComponent,
    AlertErrorComponent
  ],
  templateUrl: './update-password.component.html',
  styleUrl: './update-password.component.css'
})

export class UpdatePasswordComponent {
  isLoading: boolean = false;
  successMessage: string = '';
  errorMessage: string = '';

  updatePasswordForm: FormGroup = new FormGroup({
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
  });

  constructor(private authService: AuthService) {}

  onSubmit() {
    if(this.updatePasswordForm.valid) {
      this.isLoading = true;
      this.authService.updatePassord(
        this.updatePasswordForm.value.password ?? '',
        this.updatePasswordForm.value.confirmPassword ?? ''
      ).subscribe((response: any) => {
        if (response.statusCode === 200) {
          this.isLoading = false;
          this.successMessage = response.message;
        } else {
          this.isLoading = false;
          this.errorMessage = response.message;
        }
      },
      (error: any) => {
        this.isLoading = false;
        this.errorMessage = "Error updating password";
        console.error('Error updating password', error);
      });
    }
  }

  clearMessage() {
    this.successMessage = '';
    this.errorMessage = '';
  }
}
