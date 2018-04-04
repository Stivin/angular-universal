import { Routes } from '@angular/router';

import { AboutComponent } from './about.component';

export const ROUTES: Routes = [
  {
    path: '',
    component: AboutComponent,
    data: {
      meta: {
        title: 'PUBLIC.ABOUT.PAGE_TITLE',
        description: 'PUBLIC.ABOUT.META_DESCRIPTION'
      }
    }
  }
];
