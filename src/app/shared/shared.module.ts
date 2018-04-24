import { ModuleWithProviders, NgModule } from '@angular/core';

import { TranslateModule } from '@ngx-translate/core';

import { LayoutModule } from './layout';
import { MaterialModule } from './material';

@NgModule({
  exports: [
    TranslateModule,
    LayoutModule,
    MaterialModule,
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: SharedModule };
  }
}
