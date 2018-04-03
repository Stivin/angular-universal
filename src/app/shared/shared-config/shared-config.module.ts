import { NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ConfigLoader, ConfigModule } from '@ngx-config/core';
import { ConfigHttpLoader } from '@ngx-config/http-loader';

export function configFactory(http: HttpClient): ConfigLoader {
  return new ConfigHttpLoader(http, './assets/config.local.json');
}

@NgModule({
  imports: [
    ConfigModule.forRoot({
      provide: ConfigLoader,
      useFactory: configFactory,
      deps: [HttpClient]
    }),
  ]
})
export class SharedConfigModule {
}
