import { Component, input } from '@angular/core';
import { Img } from '../../interfaces/img';

@Component({
  selector: 'app-dashboard-item',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-item.component.html',
  styleUrl: './dashboard-item.component.css'
})
export class DashboardItemComponent {
  image = input.required<Img>();
  title = input.required<string>();
}
