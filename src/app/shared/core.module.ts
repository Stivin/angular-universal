import { ModuleWithProviders, NgModule } from '@angular/core';

import { MetaModule } from './meta/meta.module';

import { ApiService } from './services/api.service';
import { TransferHttpService } from './services/transfer-http.service';

@NgModule({
  exports: [
    MetaModule,
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
