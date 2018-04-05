import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-widget-content',
  templateUrl: './widget-content.component.html'
})
export class WidgetContentComponent {
  @HostBinding('class.widget-content') classWidgetContent: boolean = true;
}
