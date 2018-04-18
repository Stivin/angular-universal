import { Component } from '@angular/core';

const LINK_LIST: any[] = [
  { url: '/home', name: 'MENU.HOME' },
  { url: '/back', name: 'MENU.BACK' },
  { url: '/blog', name: 'MENU.BLOG' },
];

@Component({
  selector: 'app-toolbar-menu',
  templateUrl: './toolbar-menu.component.html'
})
export class ToolbarMenuComponent {
  public linkList: any[] = LINK_LIST;
}
