import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TranslateModule } from '@ngx-translate/core';

import { MaterialModule } from '../material';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import {
  ToolbarComponent,
  ToolbarLangComponent,
  ToolbarLogoComponent,
  ToolbarMenuComponent,
  ToolbarProfileComponent
} from './toolbar';
import { WrapperCommonComponent, WrapperNotFoundComponent } from './wrapper';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    TranslateModule.forChild(),
    MaterialModule,
  ],
  declarations: [
    FooterComponent,
    HeaderComponent,
    ToolbarComponent, ToolbarLangComponent, ToolbarLogoComponent, ToolbarMenuComponent, ToolbarProfileComponent,
    WrapperCommonComponent, WrapperNotFoundComponent,
  ],
  exports: [
    HeaderComponent,
  ]
})
export class LayoutModule {
}
