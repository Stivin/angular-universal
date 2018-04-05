import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ILang, SharedTranslateService } from '../../../shared-translate';

@Component({
  selector: 'app-toolbar-lang',
  templateUrl: './toolbar-lang.component.html'
})
export class ToolbarLangComponent implements OnInit {
  @ViewChild('langMenu') langMenu: ElementRef;
  public langList$: Observable<ILang[]>;
  public isShowMenu: boolean = false;

  constructor(private _sharedTranslateService: SharedTranslateService) {
  }

  ngOnInit(): void {
    this.langList$ = this._sharedTranslateService.getLangList();
  }

  public changeLang(lang: ILang): void {
    this._sharedTranslateService.changeLang(lang);
    this.isShowMenu = false;
  }

  public onToggleLangMenu(): void {
    this.isShowMenu = !this.isShowMenu;
  }

  @HostListener('document:click', ['$event'])
  public handleClick(event) {
    if (!this.langMenu.nativeElement.contains(event.target)) {
      this.isShowMenu = false;
    }
  }
}
