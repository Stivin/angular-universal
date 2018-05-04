import { NgModule } from '@angular/core';
import { BrowserTransferStateModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TransferHttpCacheModule } from '@nguniversal/common';
import { REQUEST } from '@nguniversal/express-engine/tokens';

import { APP_STORAGE } from './shared/storage/storage.inject';
import { BrowserStorage } from './shared/storage/browser.storage';
import { TranslateBrowserModule } from './shared/translate/translate-browser.module';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';

export function getRequest(): any {
  return { headers: { cookie: document.cookie } };
}

@NgModule({
  imports: [
    AppModule,
    BrowserAnimationsModule,
    TransferHttpCacheModule,
    BrowserTransferStateModule,
    TranslateBrowserModule,
  ],
  // providers: [
  //   { provide: REQUEST, useFactory: (getRequest) },
  //   { provide: APP_STORAGE, useClass: BrowserStorage },
  // ],
  bootstrap: [AppComponent],
})
export class AppBrowserModule {
}
