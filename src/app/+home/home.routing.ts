import { Routes } from '@angular/router';

import { HomeComponent } from './home.component';

export const ROUTES: Routes = [
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
