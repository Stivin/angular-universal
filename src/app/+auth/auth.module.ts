import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { ROUTES } from './auth.routing';
import { AuthComponent } from './auth.component';
import { LoginComponent, LoginService } from './+login';
import { RegComponent, RegService } from './+reg';
import { RestoreComponent, RestoreService } from './+restore';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    SharedModule,
  ],
  declarations: [
    AuthComponent,
    LoginComponent,
    RegComponent,
    RestoreComponent,
  ],
  providers: [
    LoginService,
    RegService,
    RestoreService,
  ]
})
export class AuthModule {
}
