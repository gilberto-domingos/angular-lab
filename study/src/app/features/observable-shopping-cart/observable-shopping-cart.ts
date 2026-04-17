import { Component, inject } from '@angular/core';
import { ShoppingCartService } from './shopping-cart-service';

@Component({
  selector: 'app-observable-shopping-cart',
  imports: [],
  templateUrl: './observable-shopping-cart.html',
  styleUrl: './observable-shopping-cart.scss',
})
export class ObservableShoppingCart {
  cartService = inject(ShoppingCartService);
  cartQtd$ = this.cartService.catchQtdCart();

  productQtd: number = 0;

  constructor() {
    this.cartQtd$.subscribe((qty) => (this.productQtd = qty));
  }
}
