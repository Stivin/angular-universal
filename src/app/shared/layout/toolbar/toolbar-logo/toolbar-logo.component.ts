import { Component } from '@angular/core';

const ANGULAR_LOGO: string = 'assets/img/angular-white-transparent.svg';

@Component({
  selector: 'app-toolbar-logo',
  templateUrl: './toolbar-logo.component.html'
})
export class ToolbarLogoComponent {
  public angularImg: string = ANGULAR_LOGO;
}
