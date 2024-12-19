import { Component } from '@angular/core';
import { NavbarComponent } from '../../shared/layout/navbar/navbar.component';
import { FooterComponent } from '../../shared/layout/footer/footer.component';

@Component({
  selector: 'app-page-generate-url',
  imports: [
    NavbarComponent,
    FooterComponent
  ],
  templateUrl: './page-generate-url.component.html',
  styleUrl: './page-generate-url.component.css'
})
export class PageGenerateUrlComponent {

}
