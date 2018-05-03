import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';

import { REQUEST } from '@nguniversal/express-engine/tokens';
import { TranslateService as NGXTranslateService } from '@ngx-translate/core';
import { MetaService } from '@ngx-meta/core';
import { Observable, of } from 'rxjs';

import { APP_STORAGE } from '../storage/storage.inject';

import { ILang } from './translate.interface';

const LANG_LIST: ILang[] = [
  { 'code': 'en', 'name': 'English', 'culture': 'en-US' },
  { 'code': 'ru', 'name': 'Русский', 'culture': 'ru-RU' }
];
const LANG_DEFAULT: ILang = { 'code': 'ru', 'name': 'Русский', 'culture': 'ru-RU' };
const STORAGE_LANG_NAME: string = 'langCode';

@Injectable()
export class TranslateService {
  constructor(@Inject(PLATFORM_ID) private _platformId: Object,
              @Inject(REQUEST) private _request: Request,
              @Inject(NGXTranslateService) private _translate: NGXTranslateService,
              @Inject(MetaService) private _meta: MetaService,
              @Inject(APP_STORAGE) private _appStorage: Storage) {
  }

  public initLanguage(): Promise<any> {
    return new Promise((resolve: Function) => {
      this._translate.addLangs(LANG_LIST.map((lang: ILang) => lang.code));
      this._translate.setDefaultLang(LANG_DEFAULT.code);
      const language: ILang = this._getLanguage();
      this._setLanguage(language);
      resolve();
    });
  }

  private _getLanguage(): ILang {
    let language: ILang = this._getFindLang(this._appStorage.getItem(STORAGE_LANG_NAME));
    if (language) {
      return language;
    }
    if (isPlatformBrowser(this._platformId)) {
      language = this._getFindLang(this._translate.getBrowserLang());
    }
    if (isPlatformServer(this._platformId)) {
      try {
        const reqLangList: string[] = this._request.headers['accept-language'].split(';')[0].split(',');
        language = LANG_LIST.find((lang: ILang) => reqLangList.indexOf(lang.code) !== -1 || reqLangList.indexOf(lang.culture) !== -1);
      } catch (err) {
        language = LANG_DEFAULT;
      }
    }
    language = language || LANG_DEFAULT;
    this._appStorage.setItem(STORAGE_LANG_NAME, language.code);
    return language;
  }

  private _getFindLang(code: string): ILang | null {
    return code ? LANG_LIST.find((lang: ILang) => lang.code === code) : null;
  }

  private _setLanguage(lang: ILang): void {
    this._translate.use(lang.code).subscribe(() => {
      this._meta.setTag('og:locale', lang.culture);
    });
  }

  public changeLang(lang: ILang): void {
    if (lang.code === this._translate.currentLang) {
      return;
    }
    this._appStorage.setItem(STORAGE_LANG_NAME, lang.code);
    window.location.reload();
  }

  public getLangList(): Observable<ILang[]> {
    return of(LANG_LIST);
  }

  public getCurrentLang(): string {
    return this._translate.currentLang;
  }
}
