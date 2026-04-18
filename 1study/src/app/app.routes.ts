import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home').then((m) => m.Home),
  },
  {
    path: 'home',
    loadComponent: () => import('./features/home/home').then((m) => m.Home),
  },
  {
    path: 'observable',
    loadComponent: () =>
      import('./features/observable-study/observable-study').then((m) => m.ObservableStudy),
  },
  {
    path: 'obs-shop-cart',
    loadComponent: () =>
      import('./features/observable-shopping-cart/observable-shopping-cart').then(
        (m) => m.ObservableShoppingCart,
      ),
  },
  {
    path: 'obs-hot-cold',
    loadComponent: () =>
      import('./features/observable-hot-cold/observable-hot-cold').then((m) => m.ObservableHotCold),
  },
];
