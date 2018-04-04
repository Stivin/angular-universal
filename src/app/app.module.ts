import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { CookieService } from 'ngx-cookie-service';

import { SharedModule } from './shared/shared.module';
import { SharedLayoutModule } from './shared/shared-layout/shared-layout.module';
import { SharedMetaModule } from './shared/shared-meta/shared-meta.module';

import { routes } from './app.routing';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule.withServerTransition({ appId: 'my-app' }),
    HttpClientModule,
    RouterModule.forRoot(routes),
    SharedModule,
    SharedLayoutModule,
    SharedMetaModule,
  ],
  declarations: [AppComponent],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
