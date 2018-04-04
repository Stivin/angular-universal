import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { SharedTranslateService, ILang } from '../../shared-translate';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html'
})
export class ToolbarComponent implements OnInit {
  public langList$: Observable<ILang[]>;

  constructor(private _sharedTranslateService: SharedTranslateService) {
  }

  ngOnInit(): void {
    this.langList$ = this._sharedTranslateService.getLangList();
  }

  public changeLang(lang: ILang): void {
    this._sharedTranslateService.changeLang(lang);
  }
}
