import { Routes } from '@angular/router';

import { BlogComponent } from './blog.component';

export const ROUTES: Routes = [
  {
    path: '', component: BlogComponent,
    data: { meta: { title: 'BLOG.TITLE', description: 'BLOG.DESC' } }
  }
];
