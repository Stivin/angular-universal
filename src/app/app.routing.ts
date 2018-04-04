import { Routes } from '@angular/router';

import { MetaGuard } from '@ngx-meta/core';

import { BaseWrapperComponent } from './shared/shared-layout/wrapper/base-wrapper.component';

export const routes: Routes = [
  {
    path: '', component: BaseWrapperComponent, children: [
      { path: '', loadChildren: './+home/home.module#HomeModule', pathMatch: 'full' },
      { path: 'about', loadChildren: './+about/about.module#AboutModule' }
    ],
    canActivateChild: [MetaGuard], data: { i18n: { isRoot: true } }
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
