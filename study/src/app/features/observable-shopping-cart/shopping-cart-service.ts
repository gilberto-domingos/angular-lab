import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Buy } from './buy';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  private cart: Buy[] = [];
  private productAdded$ = new Subject<number>();

  catchQtdCart() {
    return this.productAdded$.asObservable();
  }

  addProduct(product: string) {
    const buyProduct: Buy = {
      product: product,
      id: this.cart.length + 1,
    };

    this.cart.push(buyProduct);
    this.productAdded$.next(this.cart.length);

    console.log(this.cart);
  }
}
