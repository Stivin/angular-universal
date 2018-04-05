import { ModuleWithProviders, NgModule } from '@angular/core';

import { SharedMetaModule } from './shared-meta/shared-meta.module';

@NgModule({
  exports: [
    SharedMetaModule,
  ]
})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: CoreModule };
  }
}
