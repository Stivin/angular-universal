import { NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TransferState } from '@angular/platform-browser';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { SharedTranslateBrowserLoaderService } from './shared-translate-browser-loader.service';
import { SharedTranslateService } from './shared-translate.service';

export function translateStaticLoader(http: HttpClient, transferState: TransferState) {
  return new SharedTranslateBrowserLoaderService('/assets/i18n/', '.json', transferState, http);
}

@NgModule({
  imports: [
    TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: translateStaticLoader,
          deps: [HttpClient, TransferState]
        }
      }
    ),
  ],
  providers: [SharedTranslateService]
})
export class SharedTranslateBrowserModule {
}
