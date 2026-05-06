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
    { title: 'signals', route: '/signals' },
    { title: 'Observable', route: '/observable' },
    { title: 'Observable Cold vs Hot', route: 'obs-cold-vs-hot' },
    { title: 'Rxjs - Switch Map vs Exhaust Map', route: 'switch-vs-exhaust' },
    { title: 'Transloco', route: 'transloco' },
    { title: 'Health check back-end', route: 'health' },
  ];
}
