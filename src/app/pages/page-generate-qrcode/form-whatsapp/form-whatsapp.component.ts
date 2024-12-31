import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { QrcodeService } from '../../../services/qrcode/qrcode.service';

@Component({
  selector: 'app-form-whatsapp',
  imports: [ReactiveFormsModule],
  templateUrl: './form-whatsapp.component.html',
  styleUrl: './form-whatsapp.component.css'
})

export class FormWhatsappComponent {
  @Input() selectedOption: string = '';
  @Output() qrcode = new EventEmitter<string>();

  whatsappForm = new FormGroup({
    whatsapp: new FormControl(''),
  })

  constructor(private qrcodeService: QrcodeService) {}

  onSubmit() {
    if (this.whatsappForm.valid) {
      this.qrcodeService.postQrcodeWhatsapp(this.whatsappForm.value.whatsapp ?? '')
        .subscribe((response: any) => {
          this.qrcode.emit(response.data.qrcode);
        });
    }  
  }
}
