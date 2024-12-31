import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { QrcodeService } from '../../../services/qrcode/qrcode.service';

@Component({
  selector: 'app-form-wifi',
  imports: [ReactiveFormsModule],
  templateUrl: './form-wifi.component.html',
  styleUrl: './form-wifi.component.css'
})

export class FormWifiComponent {
  @Input() selectedOption: string = '';
  @Output() qrcode = new EventEmitter<string>();

  wifiForm = new FormGroup({
    ssid: new FormControl(''),
    password: new FormControl(''),
    encryption: new FormControl(''),
  })

  constructor(private qrcodeService: QrcodeService) {}

  onSubmit() {
    if (this.wifiForm.valid) {
      this.qrcodeService.postQrcodeWifi(
        this.wifiForm.value.ssid ?? '', 
        this.wifiForm.value.password ?? '', 
        this.wifiForm.value.encryption ?? ''
      ).subscribe((response: any) => {
          this.qrcode.emit(response.data.qrcode);
        });
    }  
  }
}
