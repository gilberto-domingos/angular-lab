import { Component, signal, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { InvestService } from '../invest/invest-service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink, MatButtonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  protected readonly title = signal('study');

  private investService = inject(InvestService);

  items = [
    { title: 'Home', route: '/' },
    { title: 'Dialog', action: () => this.openInvestDialog() },
    { title: 'signals', route: '/signals' },
    { title: 'Observable', route: '/observable' },
    { title: 'Observable Cold vs Hot', route: 'obs-cold-vs-hot' },
    { title: 'Rxjs - Switch Map vs Exhaust Map', route: 'switch-vs-exhaust' },
    { title: 'Transloco', route: 'transloco' },
    { title: 'Health check back-end', route: 'health' },
  ];

  openInvestDialog(): void {
    this.investService
      .open()
      .afterClosed()
      .subscribe((result) => {
        if (!result) {
          return;
        }
      });
  }
}
