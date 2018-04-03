import { Routes } from '@angular/router';

import { MetaGuard } from '@ngx-meta/core';

export const routes: Routes = [
  {
    path: '', children: [
      { path: '', loadChildren: './+home/home.module#HomeModule' },
      { path: 'about', loadChildren: './+about/about.module#AboutModule' }
    ],
    canActivateChild: [MetaGuard],
    data: {
      i18n: {
        isRoot: true
      }
    }
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
