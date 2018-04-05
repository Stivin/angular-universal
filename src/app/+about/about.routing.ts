import { Routes } from '@angular/router';

import { AboutComponent } from './about.component';

export const ROUTES: Routes = [
  {
    path: '',
    component: AboutComponent,
    data: {
      meta: {
        title: 'ABOUT.TITLE',
        description: 'ABOUT.DESC'
      }
    }
  }
];
