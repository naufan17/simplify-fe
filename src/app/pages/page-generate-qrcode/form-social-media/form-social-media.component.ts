import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { QrcodeService } from '../../../services/qrcode/qrcode.service';

@Component({
  selector: 'app-form-social-media',
  imports: [ReactiveFormsModule],
  templateUrl: './form-social-media.component.html',
  styleUrl: './form-social-media.component.css'
})

export class FormSocialMediaComponent {
  @Input() selectedOption: string = '';
  @Output() qrcode = new EventEmitter<string>();

  socialMediaForm = new FormGroup({
    username: new FormControl(''),
    socialMedia: new FormControl(''),
  })

  constructor(private qrcodeService: QrcodeService) {}

  onSubmit() {
    if (this.socialMediaForm.valid) {
      this.qrcodeService.postQrcodeSocialMedia(
        this.socialMediaForm.value.username ?? '', 
        this.socialMediaForm.value.socialMedia ?? ''
      ).subscribe((response: any) => {
          this.qrcode.emit(response.data.qrcode);
        });
    }  
  }
}
