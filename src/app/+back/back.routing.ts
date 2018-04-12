import { Routes } from '@angular/router';

import { BackComponent } from './back.component';

export const ROUTES: Routes = [
  {
    path: '', component: BackComponent,
    data: { meta: { title: 'BACK.TITLE', description: 'BACK.DESC' } }
  }
];
