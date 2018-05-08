import { Component } from '@angular/core';

import { IToolbarMenu } from './toolbar.interface';

const NAV_LINKS: IToolbarMenu[] = [
  { path: '/home', label: 'MENU.HOME' },
  { path: '/back', label: 'MENU.BACK' },
  { path: '/guide', label: 'MENU.GUIDE' },
];

@Component({
  selector: 'app-toolbar-menu',
  templateUrl: './toolbar-menu.component.html'
})
export class ToolbarMenuComponent {
  public navLinks: IToolbarMenu[] = NAV_LINKS;
}
