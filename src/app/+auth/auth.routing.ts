import { Routes } from '@angular/router';

import { AuthComponent } from './auth.component';
import { LoginComponent } from './+login';
import { RegComponent } from './+reg';
import { RestoreComponent } from './+restore';

const DEFAULT_REDIRECT: string = 'login';

export const ROUTES: Routes = [
  { path: '', redirectTo: DEFAULT_REDIRECT, pathMatch: 'full' },
  {
    path: '', component: AuthComponent, children: [
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
