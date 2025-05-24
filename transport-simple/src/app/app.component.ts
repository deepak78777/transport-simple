import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TripInputComponent } from './trip-input/trip-input.component';
import { TripVisualizerComponent } from './trip-visualizer/trip-visualizer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, TripInputComponent, TripVisualizerComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  trips: { start: string; end: string }[] = [];

  handleSubmit(data: { start: string; end: string }[]) {
    this.trips = data;
  }
}
