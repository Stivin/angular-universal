import { NgModule } from '@angular/core';
import { TransferState } from '@angular/platform-browser';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { TranslateServerLoaderService } from './translate-server-loader.service';
import { TranslateService } from './translate.service';

export function translateFactory(transferState: TransferState) {
  return new TranslateServerLoaderService('./dist/server/assets/i18n', '.json', transferState);
}

@NgModule({
  imports: [
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: translateFactory,
        deps: [TransferState]
      }
    }),
  ],
  providers: [TranslateService]
})
export class TranslateServerModule {
}
