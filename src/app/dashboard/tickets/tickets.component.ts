import { Component } from '@angular/core';
import { NewTicketComponent } from './new-ticket/new-ticket.component';
import { Ticket } from './ticket/ticket.model';
import { TicketComponent } from './ticket/ticket.component';

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [NewTicketComponent, TicketComponent],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css',
})
export class TicketsComponent {
  tickets: Ticket[] = [];

  onAddTicket(ticket: { title: string; request: string }) {
    const newTicket: Ticket = {
      title: ticket.title,
      request: ticket.request,
      id: Math.random().toString(),
      status: 'open',
    };

    this.tickets.push(newTicket);
    console.log('tickets list ', this.tickets);
  }

  onCompleteTicket(id: string) {
    /* this.tickets.map((ticket)=> {
      if (ticket.id === id) {
        ticket.status = 'closed';
      }
      return ticket;
    }); */

    const foundTicket = this.tickets.find((ticket) => ticket.id === id);
    if (foundTicket) {
      foundTicket.status = 'closed';
    }
    //console.log('tickets after complete ', this.tickets, foundTicket);
  }
}
