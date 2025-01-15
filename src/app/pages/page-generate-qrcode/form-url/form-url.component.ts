import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { QrcodeService } from '../../../services/qrcode/qrcode.service';
import { AlertErrorComponent } from '../../../shared/ui/alert-error/alert-error.component';
import { LoadingButtonComponent } from '../../../shared/ui/loading-button/loading-button.component';

@Component({
  selector: 'app-form-url',
  imports: [
    ReactiveFormsModule,
    AlertErrorComponent,
    LoadingButtonComponent
  ],
  templateUrl: './form-url.component.html',
  styleUrl: './form-url.component.css'
})

export class FormUrlComponent {
  isLoading: boolean = false;
  errorMessage: string = '';

  @Input() selectedOption: string = '';
  @Output() qrcode = new EventEmitter<string>();

  urlForm: FormGroup = new FormGroup({
    url: new FormControl(''),
  })

  constructor(private qrcodeService: QrcodeService) {}

  onSubmit() {
    if (this.urlForm.valid) {
      this.isLoading = true;
      this.qrcodeService.postQrcodeUrl(
        this.urlForm.value.url ?? ''
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
        this.errorMessage = "Error generating url qrcode";
        console.error('Error generating url qrcode', error);
      });
    }
  }

  clearMessage() {
    this.errorMessage = '';
  }
}
