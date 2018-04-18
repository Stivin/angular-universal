import { APP_INITIALIZER, Inject, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { CookieService } from 'ngx-cookie-service';

import { SharedModule } from './shared/shared.module';
import { CoreModule } from './shared/core.module';
import { GlobalService } from './shared/services/global.service';

import { ROUTES } from './app.routing';
import { AppComponent } from './app.component';

export function initFactory(service: GlobalService) {
  return () => service.init();
}


@NgModule({
  imports: [
    BrowserModule.withServerTransition({ appId: 'my-app' }),
    HttpClientModule,
    RouterModule.forRoot(ROUTES, { initialNavigation: 'enabled' }),
    SharedModule.forRoot(),
    CoreModule.forRoot(),
  ],
  declarations: [AppComponent],
  providers: [
    CookieService,
    GlobalService,
    {
      provide: APP_INITIALIZER,
      useFactory: initFactory,
      multi: true,
      deps: [GlobalService]
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
