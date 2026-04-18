import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { BehaviorSubject, Observable, shareReplay } from 'rxjs';

export interface Product {
  title: string;
}

@Component({
  selector: 'app-observable-hot-cold',
  imports: [CommonModule],
  templateUrl: './observable-hot-cold.html',
  styleUrl: './observable-hot-cold.scss',
})
export class ObservableHotCold {
  http = inject(HttpClient);

  // A cold Observable only executes when someone subscribes, and each subscriber receives an independent execution.
  cold$ = new Observable<number>((subscriber) => {
    const aleatoryNumber = Math.round(Math.random() * 100);
    console.log('Executed', aleatoryNumber);
    subscriber.next(aleatoryNumber);
  });

  // A hot Observable is already emitting values ​​independently of subscribers. Subscribers only "listen to what's happening now".
  // Everyone receives the same current value
  hot$ = new BehaviorSubject<number>(0);

  product$ = this.http.get<Product>('https://dummyjson.com/products/1').pipe(shareReplay());

  constructor() {
    this.product$.subscribe((value) => console.log('SUBSCRIBER HOT 1', value.title));
    this.product$.subscribe((value) => console.log('SUBSCRIBER HOT 2', value.title));

    setTimeout(() => {
      this.hot$.next(Math.round(Math.random() * 100));
    }, 5000);

    this.hot$.subscribe((value) => console.log('SUBSCRIBER HOT AGAIN 1', value));
    this.hot$.subscribe((value) => console.log('SUBSCRIBER HOT AGAIN 2', value));

    this.cold$.subscribe((value) => console.log('SUBSCRIBER COLD AGAIN 1', value));
    this.cold$.subscribe((value) => console.log('SUBSCRIBER COLD AGAIN 2', value));
  }
}
