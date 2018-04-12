import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { ROUTES } from './blog.routing';
import { BlogComponent } from './blog.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    SharedModule,
  ],
  declarations: [BlogComponent]
})
export class BlogModule {
}
