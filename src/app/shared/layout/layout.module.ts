import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TranslateModule } from '@ngx-translate/core';

import { MaterialModule } from '../material';

import { HeaderComponent } from './header/header.component';
import {
  ToolbarComponent,
  ToolbarLangComponent,
  ToolbarLogoComponent,
  ToolbarMenuComponent,
  ToolbarProfileComponent
} from './toolbar';
import { WidgetComponent, WidgetContentComponent, WidgetToolbarComponent } from './widget';
import { WrapperCommonComponent, WrapperNotFoundComponent } from './wrapper';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule.forChild(),
    MaterialModule,
  ],
  declarations: [
    HeaderComponent,
    ToolbarComponent, ToolbarLangComponent, ToolbarLogoComponent, ToolbarMenuComponent, ToolbarProfileComponent,
    WidgetComponent, WidgetContentComponent, WidgetToolbarComponent,
    WrapperCommonComponent, WrapperNotFoundComponent,
  ],
  exports: [
    HeaderComponent,
    WidgetComponent, WidgetContentComponent, WidgetToolbarComponent,
  ]
})
export class LayoutModule {
}
