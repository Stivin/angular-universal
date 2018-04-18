import { Component } from '@angular/core';

const ANGULAR_IMG: string = 'assets/img/angular-white-transparent.svg';
const LINK_ANGULAR: string = 'https://angular.io';
const LINK_ANGULAR_UNIVERSAL: string = 'https://universal.angular.io';
const VERSION: string = '5.2.9';
const YEAR: number = 2018;

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent {
  public angularImg: string = ANGULAR_IMG;
  public linkAngular: string = LINK_ANGULAR;
  public linkAngularUniversal: string = LINK_ANGULAR_UNIVERSAL;
  public version: string = VERSION;
  public year: number = YEAR;
}
