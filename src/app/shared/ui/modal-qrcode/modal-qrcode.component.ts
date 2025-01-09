import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-modal-qrcode',
  imports: [FontAwesomeModule],
  templateUrl: './modal-qrcode.component.html',
  styleUrl: './modal-qrcode.component.css'
})

export class ModalQrcodeComponent {
  faTimes = faTimes;

  @Input() qrcode: string = '';
  @Output() closeModalEvent = new EventEmitter<void>();
  @Output() downloadQrcodeEvent = new EventEmitter<void>();

  closeModal() {
    this.closeModalEvent.emit();
  }

  downloadQrcode() {
    this.downloadQrcodeEvent.emit();
  }
}
