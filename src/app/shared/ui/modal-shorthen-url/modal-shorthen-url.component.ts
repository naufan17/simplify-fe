import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-modal-shorthen-url',
  imports: [FontAwesomeModule],
  templateUrl: './modal-shorthen-url.component.html',
  styleUrl: './modal-shorthen-url.component.css'
})

export class ModalShorthenUrlComponent {
  faTimes = faTimes;

  @Input() urlShort: string = '';
  @Output() closeModalEvent = new EventEmitter<void>();
  @Output() copyToClipboardEvent = new EventEmitter<void>();

  closeModal() {
    this.closeModalEvent.emit();
  }

  copyToClipboard() {
    this.copyToClipboardEvent.emit();
  }
}
