import { Component } from '@angular/core';
import { NavbarComponent } from '../../shared/layout/navbar/navbar.component';
import { FooterComponent } from '../../shared/layout/footer/footer.component';
import { ShortenUrlService } from '../../services/shorten-url/shorten-url.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoadingButtonComponent } from '../../shared/ui/loading-button/loading-button.component';
import { AlertErrorComponent } from '../../shared/ui/alert-error/alert-error.component';
import { ModalShorthenUrlComponent } from '../../shared/ui/modal-shorthen-url/modal-shorthen-url.component';

@Component({
  selector: 'app-page-generate-url',
  standalone: true,
  imports: [
    NavbarComponent,
    FooterComponent,
    ReactiveFormsModule,
    FontAwesomeModule,
    LoadingButtonComponent,
    AlertErrorComponent,
    ModalShorthenUrlComponent
  ],
  templateUrl: './page-generate-url.component.html',
  styleUrls: ['./page-generate-url.component.css']
})

export class PageGenerateUrlComponent {
  faTimes = faTimes;
  urlShort: string = '';
  isCopied: boolean = false;
  isLoading: boolean = false;
  errorMessage: string = '';
  shotenUrlForm = new FormGroup({
    urlOrigin: new FormControl(''),
    id: new FormControl(''),  
  });

  constructor(private shortenUrlService: ShortenUrlService) {}

  onSubmit() {
    if(this.shotenUrlForm.valid) {
      this.isLoading = true;
      this.shortenUrlService.postShortUrl(
        this.shotenUrlForm.value.urlOrigin ?? '', 
        this.shotenUrlForm.value.id ?? ''
      ).subscribe((response: any) => {
        if(response.statusCode === 201) {
          this.isLoading = false;
          this.urlShort = response.data.url;
        } else {
          this.errorMessage = response.message;
        }
      },
      (error: any) => {
        this.isLoading = false;
        this.errorMessage = "Error generating short url";
        console.error('Error generating short url', error);
      });
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

  clearMessage() {
    this.errorMessage = '';
  }
}
