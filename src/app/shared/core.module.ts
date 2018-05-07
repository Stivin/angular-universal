import { APP_INITIALIZER, ModuleWithProviders, NgModule } from '@angular/core';

import { MetaModule } from './meta';
import { TranslateService } from './translate';
import { ApiService } from './services/api.service';
import { GlobalService } from './services/global.service';
import { TransferHttpService } from './services/transfer-http.service';
import { StatusService } from './services/status.service';

export function initLanguage(translateService: TranslateService): Function {
  return (): Promise<any> => translateService.initLanguage();
}

@NgModule({
  exports: [
    MetaModule,
  ],
  providers: [
    ApiService,
    GlobalService,
    TransferHttpService,
    TranslateService,
    StatusService,
    { provide: APP_INITIALIZER, useFactory: initLanguage, multi: true, deps: [TranslateService] },
  ]
})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: CoreModule };
  }
}
