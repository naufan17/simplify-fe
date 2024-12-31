import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { QrcodeService } from '../../../services/qrcode/qrcode.service';

@Component({
  selector: 'app-form-text',
  imports: [ReactiveFormsModule],
  templateUrl: './form-text.component.html',
  styleUrl: './form-text.component.css'
})

export class FormTextComponent {
  @Input() selectedOption: string = '';
  @Output() qrcode = new EventEmitter<string>();

  textForm = new FormGroup({
    text: new FormControl(''),
  })

  constructor(private qrcodeService: QrcodeService) {}

  onSubmit() {
    if (this.textForm.valid) {
      this.qrcodeService.postQrcodeText(this.textForm.value.text ?? '')
        .subscribe((response: any) => {
          this.qrcode.emit(response.data.qrcode);
        });
    }
  }
}
