import { Component } from '@angular/core';

const GIT_HUB_LINK: string = 'https://github.com/Stivin/angular-universal';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html'
})
export class ToolbarComponent {
  public gitHubLint: string = GIT_HUB_LINK;
}
