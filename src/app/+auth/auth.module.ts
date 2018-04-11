import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { ROUTES } from './auth.routing';
import { LoginComponent } from './+login/login.component';
import { RegComponent } from './+reg/reg.component';
import { RestoreComponent } from './+restore/restore.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    SharedModule,
  ],
  declarations: [
    LoginComponent,
    RegComponent,
    RestoreComponent,
  ]
})
export class AuthModule {
}
