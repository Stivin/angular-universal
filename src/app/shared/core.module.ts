import { ModuleWithProviders, NgModule } from '@angular/core';

import { SharedMetaModule } from './shared-meta/shared-meta.module';

import { ApiService } from './services/api.service';
import { TransferHttpService } from './services/transfer-http.service';

@NgModule({
  exports: [
    SharedMetaModule,
  ],
  providers: [
    ApiService,
    TransferHttpService,
  ]
})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: CoreModule };
  }
}
