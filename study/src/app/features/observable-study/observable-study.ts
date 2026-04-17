import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ObservableShoppingCart } from '../observable-shopping-cart/observable-shopping-cart';
import { ShoppingCartService } from '../observable-shopping-cart/shopping-cart-service';
@Component({
  selector: 'app-observable-study',
  imports: [FormsModule, ObservableShoppingCart],
  templateUrl: './observable-study.html',
  styleUrl: './observable-study.scss',
})
export class ObservableStudy {
  itemProduct: string = '';
  inputProduct: string = '';
  private cartService = inject(ShoppingCartService);

  addProduct() {
    this.cartService.addProduct(this.inputProduct);
    this.inputProduct = '';
  }

  // study order -  1. Observable + subscribe() , - 2. pipe(), - 3. map, - 4.tap - 5. timer

  /// Correct method
  // private timer$ = new Observable<string>((observer) => {
  //   console.log('CORRECT OBSERVABLE START');

  //   const timeoutId = setTimeout(() => {
  //     observer.next('OBSERVABLE RESOLVED');
  //     observer.complete();
  //   }, 5000);

  //   return () => {
  //     clearTimeout(timeoutId);
  //     console.log('OBSERVABLE CANCELLED');
  //   };
  // });

  // Professional version (RxJS)
  // private timer$ = timer(5000).pipe(
  //   tap(() => console.log('OBSERVABLE START')),
  //   map(() => 'OBSERVABLE RESOLVED'),
  // );

  // Teacher method example
  // private timer$ = new Observable<string>((subscribe) => {
  //   console.log('OBSERVABLE START TEACHER METHOD EXAMPLE');
  //   setTimeout(() => {
  //     subscribe.next('OBSERVABLE RESOLVED');
  //   }, 5000);
  // });

  // // Promise example
  // private timer = new Promise<string>((resolve, reject) => {
  //   console.log('PROMISE START !');
  //   setTimeout(() => {
  //     resolve('PROMISE RESOLVED');
  //   }, 5000);
  // });

  ngOnInit(): void {
    // this.timer$.subscribe((value) => console.log(value));
    // this.timer.then((value) => console.log(value));
  }
}
