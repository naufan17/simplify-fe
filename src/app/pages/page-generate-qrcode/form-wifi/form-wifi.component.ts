import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { QrcodeService } from '../../../services/qrcode/qrcode.service';
import { AlertErrorComponent } from '../../../shared/ui/alert-error/alert-error.component';
import { LoadingButtonComponent } from '../../../shared/ui/loading-button/loading-button.component';

@Component({
  selector: 'app-form-wifi',
  imports: [
    ReactiveFormsModule,
    AlertErrorComponent,
    LoadingButtonComponent
  ],
  templateUrl: './form-wifi.component.html',
  styleUrl: './form-wifi.component.css'
})

export class FormWifiComponent {
  isLoading: boolean = false;
  errorMessage: string = '';

  @Input() selectedOption: string = '';
  @Output() qrcode = new EventEmitter<string>();

  wifiForm: FormGroup = new FormGroup({
    ssid: new FormControl(''),
    password: new FormControl(''),
    encryption: new FormControl(''),
  })

  constructor(private qrcodeService: QrcodeService) {}

  onSubmit() {
    if (this.wifiForm.valid) {
      this.isLoading = true;
      this.qrcodeService.postQrcodeWifi(
        this.wifiForm.value.ssid ?? '', 
        this.wifiForm.value.password ?? '', 
        this.wifiForm.value.encryption ?? ''
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
        this.errorMessage = "Error generating wifi qrcode";
        console.error('Error generating wifi qrcode', error);
      })
    }  
  }

  clearMessage() {
    this.errorMessage = '';
  }
}
