import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';

export interface Product {
  title: string;
}

@Component({
  selector: 'app-observable-cold-hot',
  imports: [CommonModule],
  templateUrl: './observable-cold-hot.html',
  styleUrl: './observable-cold-hot.scss',
})
export class ObservableColdHot {
  http = inject(HttpClient);

  cold$ = new Observable<number>((subscriber) => {
    const aleatoryNumber = Math.round(Math.random() * 100);
    console.log('Executed !', aleatoryNumber);
    subscriber.next(aleatoryNumber);
  });

  product$ = this.http.get<Product>('https://dummyjson.com/products/1').pipe(shareReplay());

  constructor() {
    this.product$.subscribe((value) => console.log('SUBSCRIBER 1', value.title));
    this.product$.subscribe((value) => console.log('SUBSCRIBER 2', value.title));

    // this.hot$.subscribe((value) => console.log('HOT SUBSCRIBER 1', value));
    // this.hot$.subscribe((value) => console.log('HOT SUBSCRIBER 2', value));

    // setTimeout(() => {
    //   this.hot$.next(Math.round(Math.random() * 100));
    // }, 3000);

    // this.cold$.subscribe((value) => console.log('SUBSCRIBER 1', value));
    // this.cold$.subscribe((value) => console.log('SUBSCRIBER 2', value));
  }
}
