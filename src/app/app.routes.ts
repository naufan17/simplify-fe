import { Routes } from '@angular/router';
// import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { PageGenerateUrlComponent } from './pages/page-generate-url/page-generate-url.component';
import { PageGenerateQrcodeComponent } from './pages/page-generate-qrcode/page-generate-qrcode.component';
import { PageComingSoonFeatureComponent } from './pages/page-coming-soon-feature/page-coming-soon-feature.component';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { PageRegisterComponent } from './pages/page-register/page-register.component';

export const routes: Routes = [
  // { path: '**', component: PageNotFoundComponent },
  { path: '', component: PageHomeComponent },
  { path: 'login', component: PageLoginComponent },
  { path: 'register', component: PageRegisterComponent },
  { path: 'generate/url', component: PageGenerateUrlComponent },
  { path: 'generate/qrcode', component: PageGenerateQrcodeComponent },
  { path: 'documentation', component: PageComingSoonFeatureComponent }
];