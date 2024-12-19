import { Routes } from '@angular/router';
// import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { PageGenerateUrlComponent } from './pages/page-generate-url/page-generate-url.component';
import { PageGenerateQrcodeComponent } from './pages/page-generate-qrcode/page-generate-qrcode.component';

export const routes: Routes = [
  // { path: '**', component: PageNotFoundComponent },
  { path: '', component: PageHomeComponent },
  { path: 'generate/url', component: PageGenerateUrlComponent },
  { path: 'generate/qrcode', component: PageGenerateQrcodeComponent }
];