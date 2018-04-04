import { NgModule } from '@angular/core';

import { MetaLoader, MetaModule, MetaStaticLoader } from '@ngx-meta/core';
import { TranslateService } from '@ngx-translate/core';

export function metaFactory(translate: TranslateService): MetaLoader {
  return new MetaStaticLoader({
    callback: (key: string) => translate.get(key),
    pageTitlePositioning: 10,
    pageTitleSeparator: ' | ',
    applicationName: 'APP_NAME',
    applicationUrl: 'https://fulls1z3.github.io/example-app',
    defaults: {
      title: 'DEFAULT_TITLE',
      description: 'DEFAULT_META_DESCRIPTION',
      generator: 'ng-seed',
      'og:site_name': 'APP_NAME',
      'og:type': 'website',
      'og:locale': 'en-US',
      'og:locale:alternate': [
        { 'code': 'en', 'name': 'English', 'culture': 'en-US' },
        { 'code': 'ru', 'name': 'Русский', 'culture': 'ru-RU' }
      ].map((language: any) => language.culture).toString()
    }
  });
}

@NgModule({
  imports: [
    MetaModule.forRoot({
      provide: MetaLoader,
      useFactory: metaFactory,
      deps: [TranslateService]
    })
  ]
})
export class SharedMetaModule {
}
