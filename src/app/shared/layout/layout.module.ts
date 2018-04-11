import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TranslateModule } from '@ngx-translate/core';

import { HeaderComponent } from './header/header.component';
import { ToolbarComponent, ToolbarLangComponent, ToolbarLogoComponent, ToolbarMenuComponent } from './toolbar';
import { WidgetComponent, WidgetContentComponent, WidgetToolbarComponent } from './widget';
import { BaseWrapperComponent } from './wrapper/base-wrapper.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule.forChild(),
  ],
  declarations: [
    HeaderComponent,
    ToolbarComponent, ToolbarLangComponent, ToolbarLogoComponent, ToolbarMenuComponent,
    WidgetComponent, WidgetContentComponent, WidgetToolbarComponent,
    BaseWrapperComponent,
  ],
  exports: [
    HeaderComponent,
    WidgetComponent, WidgetContentComponent, WidgetToolbarComponent,
  ]
})
export class LayoutModule {
}
