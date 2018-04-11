import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TranslateModule } from '@ngx-translate/core';

import { HeaderComponent } from './header/header.component';
import { ToolbarComponent, ToolbarLangComponent, ToolbarLogoComponent, ToolbarMenuComponent } from './toolbar';
import { WidgetComponent, WidgetContentComponent, WidgetToolbarComponent } from './widget';
import { WrapperAuthComponent, WrapperCommonComponent, WrapperNotFoundComponent } from './wrapper';

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
    WrapperAuthComponent, WrapperCommonComponent, WrapperNotFoundComponent,
  ],
  exports: [
    HeaderComponent,
    WidgetComponent, WidgetContentComponent, WidgetToolbarComponent,
  ]
})
export class LayoutModule {
}
