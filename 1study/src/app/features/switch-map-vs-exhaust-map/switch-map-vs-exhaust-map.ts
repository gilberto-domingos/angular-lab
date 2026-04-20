import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, exhaustMap, filter, of } from 'rxjs';

@Component({
  selector: 'app-switch-map-vs-exhaust-map',
  imports: [ReactiveFormsModule],
  templateUrl: './switch-map-vs-exhaust-map.html',
  styleUrl: './switch-map-vs-exhaust-map.scss',
})
export class SwitchMapVsExhaustMap {
  input = new FormControl<string>('');

  constructor() {
    this.input.valueChanges
      .pipe(
        filter((value) => !!value),
        debounceTime(1000),
        // switchMap((valueSearch) => this.findSearch(valueSearch || '')),
        exhaustMap((valueSearch) => this.findSearch(valueSearch || '')),
      )
      .subscribe((valueInput) => {
        console.log(valueInput);
      });
  }

  findSearch(search: string) {
    // fake Http query
    return of(`Searching ... ${search}`);
  }
}
