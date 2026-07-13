import { Routes } from '@angular/router';
import { About } from './menu/about/about';
import { Home } from './menu/home/home';
import { Contact } from './menu/contact/contact';
import { SliderComponent } from './slider/slider';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'home', component: Home },
  { path: 'about', component: About },
  { path: 'contact', component: Contact },
  { path: 'SliderComponent', component: SliderComponent },
];
