import { NgModule } from '@angular/core';
import { ServerModule, ServerTransferStateModule } from '@angular/platform-server';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';

import { SharedTranslateServerModule } from './shared/shared-translate/shared-translate-server.module';
import { ServerStorage } from './shared/shared-storage/server.storage';
import { AppStorage } from './shared/shared-storage/storage.inject';

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
    { provide: AppStorage, useClass: ServerStorage }
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {
}
