import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { QrcodeService } from '../../../services/qrcode/qrcode.service';
import { AlertErrorComponent } from '../../../shared/ui/alert-error/alert-error.component';
import { LoadingButtonComponent } from '../../../shared/ui/loading-button/loading-button.component';

@Component({
  selector: 'app-form-email',
  imports: [
    ReactiveFormsModule,
    AlertErrorComponent,
    LoadingButtonComponent
  ],
  templateUrl: './form-email.component.html',
  styleUrl: './form-email.component.css'
})

export class FormEmailComponent {
  isLoading: boolean = false;
  errorMessage: string = '';

  @Input() selectedOption: string = '';
  @Output() qrcode = new EventEmitter<string>();

  emailForm = new FormGroup({
    email: new FormControl(''),
  })

  constructor(private qrcodeService: QrcodeService) {}

  onSubmit() {
    if (this.emailForm.valid) {
      this.isLoading = true;
      this.qrcodeService.postQrcodeEmail(
        this.emailForm.value.email ?? ''
      ).subscribe((response: any) => {
        if(response.statusCode === 201) {
          this.isLoading = false;
          this.qrcode.emit(response.data.qrcode);
        } else {
          this.errorMessage = response.message;
        }
      },
      (error: any) => {
        this.isLoading = false;
        this.errorMessage = "Error generating email qrcode";
        console.error('Error generating email qrcode', error);
      });
    }
  }

  clearMessage() {
    this.errorMessage = '';
  }
}
