import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  // Avoid View Encapsulation
  // encapsulation: ViewEncapsulation.None

  // Default option
  // encapsulation: ViewEncapsulation.Emulated

  // Use Shadow DOM to encapsulate styles
  // encapsulation: ViewEncapsulation.ShadowDom
})
export class ServerElementComponent implements OnInit {
  // By default all components are private (only available inside the class), so we use @Input()
  // We use an alias to use this property from output.
  @Input('srvElement') element: { type: string, name: string, content: string };

  constructor() {
  }

  ngOnInit(): void {
  }

}
