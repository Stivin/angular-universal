import { Component, ElementRef, HostListener, Inject, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';

// import { APP_STORAGE } from '../../../storage/storage.inject';

const DARK_THEME: string = 'dark-theme';
const APP_STORAGE_IS_DARK_THEME: string = 'isDarkTheme';

@Component({
  selector: 'app-toolbar-profile',
  templateUrl: './toolbar-profile.component.html'
})
export class ToolbarProfileComponent implements OnInit {
  @ViewChild('profileMenu') profileMenu: ElementRef;
  public isShowMenu: boolean = false;
  public darkThemeControl: FormControl = new FormControl();

  constructor(// @Inject(APP_STORAGE) private _appStorage: Storage,
              private _renderer: Renderer2) {
  }

  ngOnInit(): void {
    this._initTheme();
  }

  public onToggleProfileMenu(): void {
    this.isShowMenu = !this.isShowMenu;
  }

  private _initTheme(): void {
    // const isDarkTheme: boolean = this._appStorage.getItem(APP_STORAGE_IS_DARK_THEME) === 'true';
    // this.darkThemeControl.setValue(isDarkTheme);
    // this.changeDarkTheme(isDarkTheme);
  }

  public toggleDarkTheme(isDarkTheme: boolean): void {
    isDarkTheme = !isDarkTheme;
    this.darkThemeControl.setValue(isDarkTheme);
    this.changeDarkTheme(isDarkTheme);
  }

  public changeDarkTheme(isDarkTheme: boolean): void {
    // this._appStorage.setItem(APP_STORAGE_IS_DARK_THEME, String(isDarkTheme));
    if (isDarkTheme) {
      // this._renderer.addClass(document.body, DARK_THEME);
    } else {
      // this._renderer.removeClass(document.body, DARK_THEME);
    }
  }

  @HostListener('document:click', ['$event'])
  public handleClick(event): void {
    if (!this.profileMenu.nativeElement.contains(event.target)) {
      this.isShowMenu = false;
    }
  }
}
