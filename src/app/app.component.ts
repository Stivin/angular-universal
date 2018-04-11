import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/do';

import { TranslateService } from './shared/translate';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent implements OnInit {
  constructor(private _translateService: TranslateService) {
  }

  ngOnInit(): void {
    this._translateService.initLanguage();
  }
}
