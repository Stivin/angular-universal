import { NgModule } from '@angular/core';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { TransferHttpCacheModule } from '@nguniversal/common';
import { ConfigLoader, ConfigModule, ConfigService } from '@ngx-config/core';
import { ConfigHttpLoader } from '@ngx-config/http-loader';
import { MetaLoader, MetaModule, MetaStaticLoader } from '@ngx-meta/core';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { SharedTranslateBrowserModule } from './shared/shared-translate/shared-translate-browser.module';
import { SharedMetaModule } from './shared/shared-meta/shared-meta.module';
import { SharedConfigModule } from './shared/shared-config/shared-config.module';

import { routes } from './app.routing';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule.withServerTransition({ appId: 'my-app' }),
    BrowserTransferStateModule,
    HttpClientModule,
    RouterModule.forRoot(routes, { initialNavigation: 'enabled' }),
    SharedTranslateBrowserModule,
    SharedMetaModule,
    SharedConfigModule,
    // TransferHttpCacheModule
  ],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
