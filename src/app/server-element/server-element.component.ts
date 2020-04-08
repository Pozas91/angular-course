import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {
  // By default all components are private (only available inside the class), so we use @Input()
  @Input() element: { type: string, name: string, content: string };

  constructor() {
  }

  ngOnInit(): void {
  }

}
