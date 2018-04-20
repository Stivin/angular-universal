import { Inject, Injectable } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';
import { MetaService } from '@ngx-meta/core';

import { APP_STORAGE } from '../storage/storage.inject';
import { ILang } from '../translate';

const LANG_LIST: ILang[] = [
  { 'code': 'en', 'name': 'English', 'culture': 'en-US' },
  { 'code': 'ru', 'name': 'Русский', 'culture': 'ru-RU' }
];
const LANG_DEFAULT: ILang = { 'code': 'ru', 'name': 'Русский', 'culture': 'ru-RU' };

@Injectable()
export class GlobalService {
  constructor(@Inject(APP_STORAGE) private _appStorage: Storage,
              @Inject(TranslateService) private _translate: TranslateService,
              @Inject(MetaService) private _meta: MetaService) {
  }

  public initLanguage(): Promise<any> {
    return new Promise(resolve => {
      const defaultLanguage = LANG_DEFAULT;
      this._translate.addLangs(LANG_LIST.map((lang: ILang) => lang.code));
      this._translate.setDefaultLang(defaultLanguage.code);
      this._meta.setTag('og:locale', defaultLanguage.culture);
      const storageLangCode: string = this._appStorage.getItem('langCode');
      const storageLang = LANG_LIST.find((lang: ILang) => lang.code === storageLangCode);
      this._setLanguage(storageLang || defaultLanguage);
      resolve();
    });
  }

  private _setLanguage(lang: ILang): void {
    this._translate.use(lang.code).subscribe(() => {
      this._meta.setTag('og:locale', lang.culture);
    });
  }
}


