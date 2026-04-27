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
    path: 'obs-cold-vs-hot',
    loadComponent: () =>
      import('./features/observable-cold-hot/observable-cold-hot').then((m) => m.ObservableColdHot),
  },
  {
    path: 'switch-vs-exhaust',
    loadComponent: () =>
      import('./features/switch-map-vs-exhaust-map/switch-map-vs-exhaust-map').then(
        (m) => m.SwitchMapVsExhaustMap,
      ),
  },
  {
    path: 'health',
    loadComponent: () =>
      import('./features/health-check-back/health-check-back').then((m) => m.HealthCheckBack),
  },
  {
    path: 'transloco',
    loadComponent: () => import('./features/transloco/transloco').then((m) => m.Transloco),
  },
];
