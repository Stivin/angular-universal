import { APP_INITIALIZER, ModuleWithProviders, NgModule } from '@angular/core';

import { MetaModule } from './meta/meta.module';
import { ApiService } from './services/api.service';
import { TransferHttpService } from './services/transfer-http.service';
import { TranslateService } from './translate';

export function initLanguage(translateService: TranslateService): Function {
  return (): Promise<any> => translateService.initLanguage();
}

@NgModule({
  exports: [
    MetaModule,
  ],
  providers: [
    ApiService,
    TransferHttpService,
    TranslateService,
    { provide: APP_INITIALIZER, useFactory: initLanguage, multi: true, deps: [TranslateService] },
  ]
})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: CoreModule };
  }
}
