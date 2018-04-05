import { ModuleWithProviders, NgModule } from '@angular/core';

import { TranslateModule } from '@ngx-translate/core';

import { SharedLayoutModule } from './shared-layout/shared-layout.module';

@NgModule({
  exports: [
    TranslateModule,
    SharedLayoutModule,
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: SharedModule };
  }
}
