import { Inject, Injectable } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class GlobalService {
  constructor(@Inject(TranslateService) private _translateService: TranslateService) {
  }

  public init(): Promise<boolean> {
    return new Promise(resolve => {
      this._translateService.use('ru');
      resolve(true);
    });
  }
}


