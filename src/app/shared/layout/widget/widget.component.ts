import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html'
})
export class WidgetComponent {
  @HostBinding('class.widget') classWidget: boolean = true;
  @Input() title: string;
}
