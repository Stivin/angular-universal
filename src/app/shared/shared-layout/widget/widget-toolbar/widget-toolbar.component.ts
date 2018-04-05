import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-widget-toolbar',
  templateUrl: './widget-toolbar.component.html'
})
export class WidgetToolbarComponent {
  @HostBinding('class.widget-toolbar') classWidgetToolbar: boolean = true;
}
