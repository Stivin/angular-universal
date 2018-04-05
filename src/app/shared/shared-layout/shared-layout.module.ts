import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TranslateModule } from '@ngx-translate/core';

import { BaseWrapperComponent } from './wrapper/base-wrapper.component';
import { ToolbarComponent, ToolbarLangComponent, ToolbarMenuComponent } from './toolbar';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule.forChild(),
  ],
  declarations: [
    BaseWrapperComponent,
    ToolbarComponent, ToolbarLangComponent, ToolbarMenuComponent,
  ]
})
export class SharedLayoutModule {
}
