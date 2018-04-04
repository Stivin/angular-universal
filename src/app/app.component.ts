import { Component, Inject, OnInit } from '@angular/core';

import { MetaService } from '@ngx-meta/core';
import { TranslateService } from '@ngx-translate/core';

import { AppStorage } from './shared/shared-storage/storage.inject';

const LANG_LIST: any[] = [
  { 'code': 'en', 'name': 'English', 'culture': 'en-US' },
  { 'code': 'ru', 'name': 'Русский', 'culture': 'ru-RU' }
];
const LANG_DEFAULT: any = { 'code': 'ru', 'name': 'Русский', 'culture': 'ru-RU' };

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  public title: string;
  public langList: any[] = LANG_LIST;

  constructor(@Inject(AppStorage) private _appStorage: Storage,
              private readonly _translate: TranslateService,
              private readonly _meta: MetaService) {
  }

  ngOnInit(): void {
    this.title = 'Angular Universal Starter';
    const defaultLanguage = LANG_DEFAULT;
    this._translate.addLangs(LANG_LIST.map((lang: any) => lang.code));
    this._translate.setDefaultLang(defaultLanguage.code);
    this._meta.setTag('og:locale', defaultLanguage.culture);

    console.log(this._appStorage.getItem('lang'));

    this._setLanguage(defaultLanguage);
  }

  private _setLanguage(lang: any): void {
    this._translate.use(lang.code).subscribe(() => {
      this._meta.setTag('og:locale', lang.culture);
    });
  }

  public changeLang(lang: any): void {
    this._appStorage.setItem('lang', lang.code);
    this._setLanguage(lang);
  }
}
