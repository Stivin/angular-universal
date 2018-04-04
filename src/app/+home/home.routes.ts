// angular
import { Routes } from '@angular/router';

// components
import { HomeComponent } from './home.component';

export const routes: Routes = [
  {
    path: '', component: HomeComponent,
    data: {
      meta: {
        title: 'HOME.TITLE',
        description: 'HOME.DESC',
        override: true
      }
    }
  }
];
