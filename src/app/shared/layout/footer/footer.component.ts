import { Component, HostBinding } from '@angular/core';

const ANGULAR_IMG: string = 'assets/img/angular-white-transparent.svg';
const ANGULAR_LINK: string = 'https://angular.io';
const VERSION: string = '5.2.9';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent {
  @HostBinding('class.footer-wrap') classFooterWrap: boolean = true;
  public angularImg: string = ANGULAR_IMG;
  public angularLink: string = ANGULAR_LINK;
  public version: string = VERSION;
}
