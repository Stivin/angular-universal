import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { SharedModule } from './shared/shared.module';
import { CoreModule } from './shared/core.module';

import { ROUTES } from './app.routing';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule.withServerTransition({ appId: 'my-app' }),
    HttpClientModule,
    RouterModule.forRoot(ROUTES, { initialNavigation: 'enabled' }),
    SharedModule.forRoot(),
    CoreModule.forRoot(),
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
