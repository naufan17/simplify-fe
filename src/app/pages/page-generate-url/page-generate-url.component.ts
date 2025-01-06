import { Component } from '@angular/core';
import { NavbarComponent } from '../../shared/layout/navbar/navbar.component';
import { FooterComponent } from '../../shared/layout/footer/footer.component';
import { ShortenUrlService } from '../../services/shorten-url/shorten-url.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-page-generate-url',
  standalone: true,
  imports: [
    NavbarComponent,
    FooterComponent,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  templateUrl: './page-generate-url.component.html',
  styleUrls: ['./page-generate-url.component.css']
})

export class PageGenerateUrlComponent {
  faTimes = faTimes;
  urlShort: string = '';
  isCopied: boolean = false;
  shotenUrlForm = new FormGroup({
    urlOrigin: new FormControl(''),
    id: new FormControl(''),  
  });

  constructor(private shortenUrlService: ShortenUrlService) {}

  onSubmit() {
    if (this.shotenUrlForm.valid) {
      this.shortenUrlService.postShortUrl(
        this.shotenUrlForm.value.urlOrigin ?? '', 
        this.shotenUrlForm.value.id ?? ''
      ).subscribe(
        (response: any) => {
          if (response.statusCode === 201) {
            console.log('URL shortened successfully', response);
            this.urlShort = response.data.url;
          } else {
            console.error('Unexpected response code', response.message);
          }
        },
        (error: any) => {
          console.error('Failed to shorten URL', error);
        }
      );
    }
  }

  closeModal() {
    this.urlShort = '';
  }

  copyToClipboard() {
    navigator.clipboard.writeText(this.urlShort);
    this.isCopied = true;
    setTimeout(() => {
      this.isCopied = false;
    }, 2000);
  }
}
