import { Routes } from '@angular/router';

import { GuideComponent } from './guide.component';

export const ROUTES: Routes = [
  {
    path: '', component: GuideComponent,
    data: { meta: { title: 'GUIDE.TITLE', description: 'GUIDE.DESC' } }
  }
];
