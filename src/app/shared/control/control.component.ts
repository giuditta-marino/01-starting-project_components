import {
  AfterContentInit,
  Component,
  contentChild,
  ContentChild,
  ElementRef,
  HostBinding,
  HostListener,
  inject,
  input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClick()',
  },
})
export class ControlComponent implements AfterContentInit {
  //@HostBinding('class') className = 'control';
  /*  @HostListener('click') onClick() {
    console.log('on click');    
  } */
  //@ContentChild('input') control?: ElementRef<HTMLInputElement | HTMLTextAreaElement>;
  private el = inject(ElementRef);
  label = input.required<string>();
  private control = contentChild<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input');

  onClick() {
    console.log('on click');
    console.log('el ', this.el);
    console.log('control ', this.control());
  }

  ngAfterContentInit(): void {
    console.log('control content init ', this.control());
  }
}
