import { Routes } from '@angular/router';
import { About } from './menu/about/about';
import { Home } from './menu/home/home';
import { Contact } from './menu/contact/contact';
import { SliderComponent } from './slider/slider';
import { Paper } from './menu/paper/paper';
import { PaperInfo } from './menu/paper/paper-info/paper-info';
import { Course } from './course/course';
import { FullCourse } from './course/full-course/full-course';
import { HandsOnTraining } from './course/hands-on-training/hands-on-training';
import { ProjectOriented } from './course/project-oriented/project-oriented';
import { PageNotFind } from './page-not-find/page-not-find';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'home', component: Home },
  { path: 'about', component: About },
  { path: 'contact', component: Contact },
  { path: 'SliderComponent', component: SliderComponent },
  { path: 'paper', component: Paper },
  // { path: 'paper/:id', component: PaperInfo },
  { path: 'paper/:id/:title/:summary/:date', component: PaperInfo },
  { path: 'paper/info', component: PaperInfo },
  {
    path: 'course',
    component: Course,
    children: [
      { path: 'FullCourse', component: FullCourse },
      { path: 'HandsOnTraining', component: HandsOnTraining },
      { path: 'ProjectOriented', component: ProjectOriented },
      { path: '', redirectTo: 'FullCourse', pathMatch: 'full' },
    ],
  },
  { path: '**', component: PageNotFind },
];
