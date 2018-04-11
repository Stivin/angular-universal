import { Routes } from '@angular/router';

import { WrapperAuthComponent } from '../shared/layout/wrapper';

import { LoginComponent } from './+login/login.component';
import { RegComponent } from './+reg/reg.component';
import { RestoreComponent } from './+restore/restore.component';

const DEFAULT_REDIRECT: string = 'login';

export const ROUTES: Routes = [
  { path: '', redirectTo: DEFAULT_REDIRECT, pathMatch: 'full' },
  {
    path: '', component: WrapperAuthComponent, children: [
      {
        path: 'login', component: LoginComponent,
        data: { meta: { title: 'AUTH.LOGIN.TITLE', description: 'AUTH.LOGIN.DESC' } }
      },
      {
        path: 'reg', component: RegComponent,
        data: { meta: { title: 'AUTH.REG.TITLE', description: 'AUTH.REG.DESC' } }
      },
      {
        path: 'restore', component: RestoreComponent,
        data: { meta: { title: 'AUTH.RESTORE.TITLE', description: 'AUTH.RESTORE.DESC' } }
      }
    ]
  }
];
