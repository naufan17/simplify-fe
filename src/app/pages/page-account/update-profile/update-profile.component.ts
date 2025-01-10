import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { LoadingButtonComponent } from '../../../shared/ui/loading-button/loading-button.component';
import { AlertSuccessComponent } from '../../../shared/ui/alert-success/alert-success.component';
import { UserService } from '../../../services/user/user.service';
import { AlertErrorComponent } from '../../../shared/ui/alert-error/alert-error.component';

@Component({
  selector: 'app-update-profile',
  imports: [
    ReactiveFormsModule,
    LoadingButtonComponent,
    AlertSuccessComponent,
    AlertErrorComponent
  ],
  templateUrl: './update-profile.component.html',
  styleUrl: './update-profile.component.css'
})

export class UpdateProfileComponent {
  isLoading: boolean = false;
  successMessage: string = '';
  errorMessage: string = '';
  user: { 
    name: string, 
    email: string, 
    phoneNumber: string, 
    profileImage: string 
  } = { 
    name: '', 
    email: '', 
    phoneNumber: '', 
    profileImage: ''
  };

  updateProfileForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    phoneNumber: new FormControl(''),
  })

  constructor(private userService: UserService) {
    this.user = this.userService.getProfile().subscribe((response: any) => {
      if(response.statusCode === 200) {
        this.user = response.data.user;
      } else {
        console.error('Unexpected response code', response.message);
      }
    });
  }

  onSubmit() {
    if(this.updateProfileForm.valid) {
      this.isLoading = true;
      this.userService.updateProfile(
        this.updateProfileForm.value.name ?? '', 
        this.updateProfileForm.value.email ?? '', 
        this.updateProfileForm.value.phoneNumber ?? ''
      ).subscribe((response: any) => {
        if(response.statusCode === 200) {
          this.isLoading = false;
          this.successMessage = response.message;
        } else {
          this.isLoading = false;
          this.errorMessage = response.message;
        }
      }, (error: any) => {
        this.isLoading = false;
        console.error('Error updating profile', error);
      });
    }
  }

  clearMessage() {
    this.successMessage = '';
    this.errorMessage = '';
  }
}
