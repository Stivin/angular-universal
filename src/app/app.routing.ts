import { Routes } from '@angular/router';

import { MetaGuard } from '@ngx-meta/core';

import { WrapperBaseComponent, WrapperNotFoundComponent } from './shared/layout/wrapper';

const DEFAULT_REDIRECT: string = 'home';

export const ROUTES: Routes = [
  { path: '', redirectTo: DEFAULT_REDIRECT, pathMatch: 'full' },
  {
    path: '', component: WrapperBaseComponent, children: [
      { path: 'home', loadChildren: './+home/home.module#HomeModule', pathMatch: 'full' },
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
