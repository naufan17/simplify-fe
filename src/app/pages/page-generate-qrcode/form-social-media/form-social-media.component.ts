import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { QrcodeService } from '../../../services/qrcode/qrcode.service';
import { AlertErrorComponent } from '../../../shared/ui/alert-error/alert-error.component';
import { LoadingButtonComponent } from '../../../shared/ui/loading-button/loading-button.component';

@Component({
  selector: 'app-form-social-media',
  imports: [
    ReactiveFormsModule,
    AlertErrorComponent,
    LoadingButtonComponent
  ],
  templateUrl: './form-social-media.component.html',
  styleUrl: './form-social-media.component.css'
})

export class FormSocialMediaComponent {
  isLoading: boolean = false
  errorMessage: string = ''

  @Input() selectedOption: string = '';
  @Output() qrcode = new EventEmitter<string>();

  socialMediaForm = new FormGroup({
    username: new FormControl(''),
    socialMedia: new FormControl(''),
  })

  constructor(private qrcodeService: QrcodeService) {}

  onSubmit() {
    if (this.socialMediaForm.valid) {
      this.isLoading = true;
      this.qrcodeService.postQrcodeSocialMedia(
        this.socialMediaForm.value.username ?? '', 
        this.socialMediaForm.value.socialMedia ?? ''
      ).subscribe((response: any) => {
        if (response.statusCode === 201) {
          this.isLoading = false;
          this.qrcode.emit(response.data.qrcode);
        } else {
          this.errorMessage = response.message;
        }
      },
      (error: any) => {
        this.isLoading = false;
        this.errorMessage = "Error generating social media qrcode";
        console.error('Error generating social media qrcode', error);
      });
    }  
  }

  clearMessage() {
    this.errorMessage = ''
  }
}
