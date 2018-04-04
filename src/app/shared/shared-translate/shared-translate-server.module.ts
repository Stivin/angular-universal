import { NgModule } from '@angular/core';
import { TransferState } from '@angular/platform-browser';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { SharedTranslateServerLoaderService } from './shared-translate-server-loader.service';
import { SharedTranslateService } from './shared-translate.service';

export function translateFactory(transferState: TransferState) {
  return new SharedTranslateServerLoaderService('./dist/server/assets/i18n', '.json', transferState);
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
  providers: [SharedTranslateService]
})
export class SharedTranslateServerModule {
}
