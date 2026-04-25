import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  ngOnInit(): void {
    this.calcNumber(12, 34);
  }
  protected readonly title = signal('study');

  calcNumber(a: number, b: number) {
    return a * b;
  }
}
