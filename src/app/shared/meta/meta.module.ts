import { NgModule } from '@angular/core';

import { MetaLoader, MetaModule as NGXMetaModule, MetaStaticLoader } from '@ngx-meta/core';
import { TranslateService } from '@ngx-translate/core';

export function metaFactory(translate: TranslateService): MetaLoader {
  return new MetaStaticLoader({
    callback: (key: string) => translate.get(key),
    pageTitlePositioning: 10,
    pageTitleSeparator: ' | ',
    applicationName: 'APP_NAME',
    applicationUrl: 'https://angular-niversal.ru/',
    defaults: {
      title: 'DEFAULT.TITLE',
      description: 'DEFAULT.DESC',
      generator: 'ng-universal',
      'og:site_name': 'APP_NAME',
      'og:type': 'website',
      'og:image': 'https://angular-universal.ru/assets/img/universal.png',
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
    NGXMetaModule.forRoot({
      provide: MetaLoader,
      useFactory: metaFactory,
      deps: [TranslateService]
    })
  ]
})
export class MetaModule {
}
