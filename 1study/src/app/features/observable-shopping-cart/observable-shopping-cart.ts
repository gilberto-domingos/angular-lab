import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ShoppingCartService } from './shopping-cart-service';

@Component({
  selector: 'app-observable-shopping-cart',
  imports: [AsyncPipe],
  templateUrl: './observable-shopping-cart.html',
  styleUrl: './observable-shopping-cart.scss',
})
export class ObservableShoppingCart {
  cartService = inject(ShoppingCartService);
  cartQtd$: Observable<number> = this.cartService.catchQtdCart();
}
