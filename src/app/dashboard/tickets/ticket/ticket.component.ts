import { Component, input, Input, output, signal } from '@angular/core';
import { Ticket } from './ticket.model';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {
  //@Input() ticket?: Ticket;
  ticket = input.required<Ticket>();
  markAsCompleted = output();
  detailsVisible = signal<boolean>(false);

  onToggleDetailsVisible() {
    //this.detailsVisible.set(!this.detailsVisible());
    this.detailsVisible.update((oldV)=> !oldV);
  }

  onMarkAsCompleted() {
    this.markAsCompleted.emit();
  }
}
