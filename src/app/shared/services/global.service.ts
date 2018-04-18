import { Inject, Injectable } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class GlobalService {
  constructor(@Inject(TranslateService) private _translateService: TranslateService) {
  }

  init() {
    return new Promise((resolve, reject) => {
      this._translateService.use('ru');
      resolve();
    });
  }
}


