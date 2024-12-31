import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { QrcodeService } from '../../../services/qrcode/qrcode.service';

@Component({
  selector: 'app-form-email',
  imports: [ReactiveFormsModule],
  templateUrl: './form-email.component.html',
  styleUrl: './form-email.component.css'
})

export class FormEmailComponent {
  @Input() selectedOption: string = '';
  @Output() qrcode = new EventEmitter<string>();

  emailForm = new FormGroup({
    email: new FormControl(''),
  })

  constructor(private qrcodeService: QrcodeService) {}

  onSubmit() {
    if (this.emailForm.valid) {
      this.qrcodeService.postQrcodeEmail(this.emailForm.value.email ?? '')
        .subscribe((response: any) => {
          this.qrcode.emit(response.data.qrcode);
        });
    }
  }
}
