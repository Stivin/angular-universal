import { NgModule } from '@angular/core';
import { ServerModule, ServerTransferStateModule } from '@angular/platform-server';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';

import { APP_STORAGE, ServerStorage } from './shared/storage';
import { TranslateServerModule } from './shared/translate/translate-server.module';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    AppModule,
    NoopAnimationsModule,
    ServerModule,
    ServerTransferStateModule,
    ModuleMapLoaderModule,
    TranslateServerModule,
  ],
  providers: [
    { provide: APP_STORAGE, useClass: ServerStorage }
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {
}
