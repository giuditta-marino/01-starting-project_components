import { afterNextRender, afterRender, AfterViewInit, Component, ElementRef, EventEmitter, output, Output, viewChild, ViewChild } from '@angular/core';
import { ControlComponent } from "../../../shared/control/control.component";
import { ButtonComponent } from '../../../shared/button/button.component';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [CotrolComponent, ButtonComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent implements AfterViewInit {
  @ViewChild('form') form?: ElementRef<HTMLFormElement>;
  //@Output() addTicket = new EventEmitter<{title: string, request: string}>();
  //private form = viewChild.required<ElementRef<HTMLFormElement>>('form');
  addTicket = output<{title: string, request: string}>();
  enteredTitle: string = '';
  enteredRequest: string = '';

  constructor() {
    //afterRender(() => console.log('after render'));
    //afterNextRender(() => console.log('after next render'));
  }

  onSubmit() {
    //this.form?.nativeElement.reset();
    this.addTicket.emit({title: this.enteredTitle, request: this.enteredRequest});
    this.enteredTitle = '';
    this.enteredRequest = '';    
  }

  ngAfterViewInit(): void {
    console.log('after view init ', this.form?.nativeElement);    
  }
}
