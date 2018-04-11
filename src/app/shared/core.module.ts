import { ModuleWithProviders, NgModule } from '@angular/core';

import { SharedMetaModule } from './shared-meta/shared-meta.module';
import { TransferHttpModule } from './transfer-http/transfer-http.module';
import { ApiService } from './services/api.service';

@NgModule({
  exports: [
    SharedMetaModule,
    TransferHttpModule,
  ],
  providers: [
    ApiService
  ]
})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: CoreModule };
  }
}
