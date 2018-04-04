import { Component, ElementRef, Inject, OnInit } from '@angular/core';

import { MetaService } from '@ngx-meta/core';
import { TranslateService } from '@ngx-translate/core';

import { AppStorage } from './shared/shared-storage/storage.inject';

interface ILang {
  code: string;
  name: string;
  culture: string;
}

const LANG_LIST: ILang[] = [
  { 'code': 'en', 'name': 'English', 'culture': 'en-US' },
  { 'code': 'ru', 'name': 'Русский', 'culture': 'ru-RU' }
];
const LANG_DEFAULT: ILang = { 'code': 'ru', 'name': 'Русский', 'culture': 'ru-RU' };

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent implements OnInit {
  public title: string;
  public langList: ILang[] = LANG_LIST;

  constructor(@Inject(AppStorage) private _appStorage: Storage,
              private readonly _translate: TranslateService,
              private readonly _meta: MetaService,
              public el: ElementRef) {
  }

  ngOnInit(): void {
    this.title = 'Angular Universal Starter';
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
}
