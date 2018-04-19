import { NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TransferState } from '@angular/platform-browser';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { TranslateBrowserLoaderService } from './translate-browser-loader.service';

export function translateStaticLoader(http: HttpClient, transferState: TransferState) {
  return new TranslateBrowserLoaderService('/assets/i18n/', '.json', transferState, http);
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
  ]
})
export class TranslateBrowserModule {
}
