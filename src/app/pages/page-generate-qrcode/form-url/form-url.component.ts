import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { QrcodeService } from '../../../services/qrcode/qrcode.service';

@Component({
  selector: 'app-form-url',
  imports: [ReactiveFormsModule],
  templateUrl: './form-url.component.html',
  styleUrl: './form-url.component.css'
})

export class FormUrlComponent {
  @Input() selectedOption: string = '';
  @Output() qrcode = new EventEmitter<string>();

  urlForm = new FormGroup({
    url: new FormControl(''),
  })

  constructor(private qrcodeService: QrcodeService) {}

  onSubmit() {
    if (this.urlForm.valid) {
      this.qrcodeService.postQrcodeUrl(this.urlForm.value.url ?? '')
        .subscribe((response: any) => {
          this.qrcode.emit(response.data.qrcode);
        });
    }  
  }
}
