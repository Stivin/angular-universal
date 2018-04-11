import { NgModule } from '@angular/core';
import { ServerModule, ServerTransferStateModule } from '@angular/platform-server';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';

import { SharedTranslateServerModule } from './shared/shared-translate/shared-translate-server.module';
import { ServerStorage } from './shared/storage/server.storage';
import { APP_STORAGE } from './shared/storage/storage.inject';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    AppModule,
    NoopAnimationsModule,
    ServerModule,
    ServerTransferStateModule,
    ModuleMapLoaderModule,
    SharedTranslateServerModule,
  ],
  providers: [
    { provide: APP_STORAGE, useClass: ServerStorage }
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {
}
