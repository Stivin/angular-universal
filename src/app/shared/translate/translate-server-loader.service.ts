import { makeStateKey, StateKey, TransferState } from '@angular/platform-browser';

import { TranslateLoader } from '@ngx-translate/core';
import { Observable } from 'rxjs/Observable';

const FS: any = require('fs');
const PREFIX: string = 'i18n';
const SUFFIX: string = '.json';
const FORMAT: string = 'utf8';

export class TranslateServerLoaderService implements TranslateLoader {
  constructor(private _prefix: string = PREFIX,
              private _suffix: string = 'SUFFIX',
              private _transferState: TransferState) {
  }

  public getTranslation(lang: string): Observable<any> {
    return Observable.create(observer => {
      const jsonData: any = JSON.parse(FS.readFileSync(`${this._prefix}/${lang}${this._suffix}`, FORMAT));
      const key: StateKey<number> = makeStateKey<number>(`transfer-translate-${lang}`);
      this._transferState.set(key, jsonData);
      observer.next(jsonData);
      observer.complete();
    });
  }
}
