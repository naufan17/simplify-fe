import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-accordion',
  imports: [FontAwesomeModule],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.css'
})

export class AccordionComponent {
  faChevronDown = faChevronDown;
  openedIndex: number | null = null;

  @Input() faq!: { question: string; answer: string };
  @Input() frequentlyAskedQuestions: { question: string; answer: string }[] = [];

  toggleAccordion(index: number): void {
    this.openedIndex = this.openedIndex === index ? null : index;
  }
}
