import { ModuleWithProviders, NgModule } from '@angular/core';

import { TranslateModule } from '@ngx-translate/core';

import { SharedLayoutModule } from './shared-layout/shared-layout.module';
import { SharedTransferHttpModule } from './shared-transfer-http/shared-transfer-http.module';

@NgModule({
  exports: [
    TranslateModule,
    SharedLayoutModule,
    SharedTransferHttpModule,
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: SharedModule };
  }
}
