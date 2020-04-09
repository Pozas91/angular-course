import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component, ContentChild,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild
} from '@angular/core';

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
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  // By default all components are private (only available inside the class), so we use @Input()
  // We use an alias to use this property from output.
  @Input('srvElement') element: { type: string, name: string, content: string };
  @Input() name: string;
  @ViewChild('heading') header: ElementRef;

  constructor() {
    console.log('ServerElement: constructor called!');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ServerElement: ngOnChanges called!', changes);
  }

  ngOnInit(): void {
    console.log('ServerElement: ngOnInit called!');
    console.log(this.header);
    console.log(this.header.nativeElement.textContent);
  }

  ngDoCheck(): void {
    console.log('ServerElement: ngDoCheck called!');
  }

  ngAfterContentInit(): void {
    console.log('ServerElement: ngAfterContentInit called!');
  }

  ngAfterContentChecked(): void {
    console.log('ServerElement: ngAfterContentChecked called!');
  }

  ngAfterViewInit(): void {
    console.log('ServerElement: ngAfterViewInit called!');
  }

  ngAfterViewChecked(): void {
    console.log('ServerElement: ngAfterViewChecked called!');
  }

  ngOnDestroy(): void {
    console.log('ServerElement: ngOnDestroy called!');
  }
}
