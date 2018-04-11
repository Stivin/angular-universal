import { Inject, Injectable } from '@angular/core';

import { TranslateService as NGXTranslateService } from '@ngx-translate/core';
import { MetaService } from '@ngx-meta/core';
import { Observable } from 'rxjs/Observable';

import { APP_STORAGE } from '../storage/storage.inject';
import { ILang } from './translate.interface';

const LANG_LIST: ILang[] = [
  { 'code': 'en', 'name': 'English', 'culture': 'en-US' },
  { 'code': 'ru', 'name': 'Русский', 'culture': 'ru-RU' }
];
const LANG_DEFAULT: ILang = { 'code': 'ru', 'name': 'Русский', 'culture': 'ru-RU' };

@Injectable()
export class TranslateService {
  constructor(@Inject(APP_STORAGE) private _appStorage: Storage,
              private readonly _translate: NGXTranslateService,
              private readonly _meta: MetaService) {
  }

  public initLanguage(): void {
    const defaultLanguage = LANG_DEFAULT;
    this._translate.addLangs(LANG_LIST.map((lang: ILang) => lang.code));
    this._translate.setDefaultLang(defaultLanguage.code);
    this._meta.setTag('og:locale', defaultLanguage.culture);

    const storageLangCode: string = this._appStorage.getItem('langCode');
    const storageLang = LANG_LIST.find((lang: ILang) => lang.code === storageLangCode);

    this._setLanguage(storageLang || defaultLanguage);
  }

  private _setLanguage(lang: ILang): void {
    this._translate.use(lang.code).subscribe(() => {
      this._meta.setTag('og:locale', lang.culture);
    });
  }

  public changeLang(lang: ILang): void {
    this._appStorage.setItem('langCode', lang.code);
    this._setLanguage(lang);
  }

  public getLangList(): Observable<ILang[]> {
    return Observable.of(LANG_LIST);
  }
}
