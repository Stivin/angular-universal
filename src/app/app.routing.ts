import { Routes } from '@angular/router';

import { MetaGuard } from '@ngx-meta/core';

import { WrapperCommonComponent, WrapperNotFoundComponent } from './shared/layout/wrapper';

const DEFAULT_REDIRECT: string = 'home';

export const ROUTES: Routes = [
  { path: '', redirectTo: DEFAULT_REDIRECT, pathMatch: 'full' },
  {
    path: '', component: WrapperCommonComponent, children: [
      { path: 'auth', loadChildren: './+auth/auth.module#AuthModule' },
      { path: 'home', loadChildren: './+home/home.module#HomeModule' },
      { path: 'back', loadChildren: './+back/back.module#BackModule' },
      { path: 'about', loadChildren: './+about/about.module#AboutModule' },
      {
        path: '**', component: WrapperNotFoundComponent,
        data: { meta: { title: 'NOT_FOUND.TITLE', description: 'NOT_FOUND.DESC' } }
      }
    ],
    canActivateChild: [MetaGuard], data: { i18n: { isRoot: true } }
  }
];
