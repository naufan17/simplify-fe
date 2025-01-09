import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-alert-success',
  imports: [],
  templateUrl: './alert-success.component.html',
  styleUrl: './alert-success.component.css'
})

export class AlertSuccessComponent {
  @Input () errorMessage: string = '';
  @Output() clearMessage = new EventEmitter<void>();

  emitClearMessage() {
    this.clearMessage.emit();
  }
}
