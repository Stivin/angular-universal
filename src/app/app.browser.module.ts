import { NgModule } from '@angular/core';
import { BrowserTransferStateModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TransferHttpCacheModule } from '@nguniversal/common';
import { REQUEST } from '@nguniversal/express-engine/tokens';

import { AppStorage } from './shared/shared-storage/storage.inject';
import { BrowserStorage } from './shared/shared-storage/browser.storage';
import { SharedTranslateBrowserModule } from './shared/shared-translate/shared-translate-browser.module';

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
    SharedTranslateBrowserModule,
  ],
  providers: [
    { provide: REQUEST, useFactory: (getRequest) },
    { provide: AppStorage, useClass: BrowserStorage },
  ],
  bootstrap: [AppComponent],
})
export class AppBrowserModule {
}
