import { Routes } from '@angular/router';
import { LandingPageComponent } from './core/pages/landing-page/landing-page.component';
import { BlogListComponent } from './core/components/blog-list/blog-list.component';


export const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'blog', component: BlogListComponent },
];
