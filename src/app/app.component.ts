import { Component, OnInit } from '@angular/core';

import { SharedTranslateService } from './shared/shared-translate';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent implements OnInit {
  constructor(private _sharedTranslateService: SharedTranslateService) {
  }

  ngOnInit(): void {
    this._sharedTranslateService.initLanguage();
  }
}
