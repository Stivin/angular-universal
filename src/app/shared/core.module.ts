import { ModuleWithProviders, NgModule } from '@angular/core';

import { SharedLayoutModule } from './shared-layout/shared-layout.module';
import { SharedMetaModule } from './shared-meta/shared-meta.module';

@NgModule({
  exports: [
    SharedLayoutModule,
    SharedMetaModule,
  ]
})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: CoreModule };
  }
}
