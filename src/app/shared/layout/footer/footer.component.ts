import { Component, OnInit } from '@angular/core';

import { GlobalService } from '../../services/global.service';

const ANGULAR_IMG: string = 'assets/img/angular-white-transparent.svg';
const LINK_ANGULAR: string = 'https://angular.io';
const LINK_ANGULAR_UNIVERSAL: string = 'https://universal.angular.io';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {
  public angularImg: string = ANGULAR_IMG;
  public linkAngular: string = LINK_ANGULAR;
  public linkAngularUniversal: string = LINK_ANGULAR_UNIVERSAL;
  public version: string;
  public year: number;

  constructor(private _globalService: GlobalService) {
  }

  ngOnInit(): void {
    this.version = this._globalService.version;
    this.year = this._globalService.year;
  }
}
