import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BaseWrapperComponent } from './wrapper/base-wrapper.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    BaseWrapperComponent,
    ToolbarComponent,
  ]
})
export class SharedLayoutModule {
}
