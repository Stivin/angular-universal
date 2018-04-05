import { Routes } from '@angular/router';

import { MetaGuard } from '@ngx-meta/core';

import { BaseWrapperComponent } from './shared/shared-layout/wrapper/base-wrapper.component';

const DEFAULT_REDIRECT: string = 'home';

export const routes: Routes = [
  { path: '', redirectTo: DEFAULT_REDIRECT, pathMatch: 'full' },
  {
    path: '', component: BaseWrapperComponent, children: [
      { path: 'home', loadChildren: './+home/home.module#HomeModule', pathMatch: 'full' },
      { path: 'about', loadChildren: './+about/about.module#AboutModule' }
    ],
    canActivateChild: [MetaGuard], data: { i18n: { isRoot: true } }
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
