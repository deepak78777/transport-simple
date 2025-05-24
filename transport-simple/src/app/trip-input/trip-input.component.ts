import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-trip-input',
  standalone: true,
  imports: [CommonModule, FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './trip-input.component.html',
  styleUrls: ['./trip-input.component.scss']
})
export class TripInputComponent {
  trips = [{ start: '', end: '' }];
  @Output() submitTrips = new EventEmitter<{ start: string; end: string }[]>();

  addTrip() {
    this.trips.push({ start: '', end: '' });
  }

  onSubmit() {
    const formatted = this.trips.map(t => ({
      start: t.start.trim().substring(0, 3).toUpperCase(),
      end: t.end.trim().substring(0, 3).toUpperCase()
    }));
    this.submitTrips.emit(formatted);
  }
}
