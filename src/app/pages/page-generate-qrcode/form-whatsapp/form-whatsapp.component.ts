import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { QrcodeService } from '../../../services/qrcode/qrcode.service';
import { AlertErrorComponent } from '../../../shared/ui/alert-error/alert-error.component';
import { LoadingButtonComponent } from '../../../shared/ui/loading-button/loading-button.component';

@Component({
  selector: 'app-form-whatsapp',
  imports: [
    ReactiveFormsModule,
    AlertErrorComponent,
    LoadingButtonComponent
  ],
  templateUrl: './form-whatsapp.component.html',
  styleUrl: './form-whatsapp.component.css'
})

export class FormWhatsappComponent {
  isLoading: boolean = false;
  errorMessage: string = '';

  @Input() selectedOption: string = '';
  @Output() qrcode = new EventEmitter<string>();

  whatsappForm: FormGroup = new FormGroup({
    whatsapp: new FormControl(''),
  })

  constructor(private qrcodeService: QrcodeService) {}

  onSubmit() {
    if (this.whatsappForm.valid) {
      this.isLoading = true;
      this.qrcodeService.postQrcodeWhatsapp(
        this.whatsappForm.value.whatsapp ?? ''
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
        this.errorMessage = "Error generating whatsapp qrcode";
        console.error('Error generating whatsapp qrcode', error);
      });
    }  
  }

  clearMessage() {
    this.errorMessage = '';
  }
}
