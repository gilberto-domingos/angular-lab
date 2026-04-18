import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  protected readonly title = signal('study');

  items = [
    { title: 'Home', route: '/' },
    { title: 'Observable', route: '/observable' },
    { title: 'Observable Hot vs Cold', route: '/obs-hot-cold' },
  ];
}
