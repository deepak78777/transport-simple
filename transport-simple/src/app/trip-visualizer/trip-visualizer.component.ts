import { Component, Input, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-trip-visualizer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trip-visualizer.component.html',
  styleUrls: ['./trip-visualizer.component.scss']
})
export class TripVisualizerComponent implements OnChanges {
  @Input() trips: { start: string; end: string }[] = [];
  visualTrips: { label: string, type: 'straight' | 'arrow' | 'curve' }[] = [];

  ngOnChanges() {
    this.visualTrips = [];
    for (let i = 0; i < this.trips.length; i++) {
      const current = this.trips[i];
      const prev = this.trips[i - 1];
      let type: 'straight' | 'arrow' | 'curve' = 'arrow';

      if (i === 0) {
        type = 'straight';
      } else if (prev.end === current.start) {
        type = 'straight';
      } else if (prev.start === current.start && prev.end === current.end) {
        type = 'curve';
      } else {
        type = 'arrow';
      }

      this.visualTrips.push({ label: `${current.start} - ${current.end}`, type });
    }
  }
}
