import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { QrcodeService } from '../../../services/qrcode/qrcode.service';
import { AlertErrorComponent } from '../../../shared/ui/alert-error/alert-error.component';
import { LoadingButtonComponent } from '../../../shared/ui/loading-button/loading-button.component';

@Component({
  selector: 'app-form-text',
  imports: [
    ReactiveFormsModule,
    AlertErrorComponent,
    LoadingButtonComponent
  ],
  templateUrl: './form-text.component.html',
  styleUrl: './form-text.component.css'
})

export class FormTextComponent {
  isLoading: boolean = false;
  errorMessage: string = '';

  @Input() selectedOption: string = '';
  @Output() qrcode = new EventEmitter<string>();

  textForm = new FormGroup({
    text: new FormControl(''),
  })

  constructor(private qrcodeService: QrcodeService) {}

  onSubmit() {
    if (this.textForm.valid) {
      this.isLoading = true;
      this.qrcodeService.postQrcodeText(
        this.textForm.value.text ?? ''
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
        this.errorMessage = "Error generating text qrcode";
        console.error('Error generating text qrcode', error);
      });
    }
  }

  clearMessage() {
    this.errorMessage = '';
  }
}
