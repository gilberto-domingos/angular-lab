import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableShoppingCart } from './observable-shopping-cart';

describe('ObservableShoppingCart', () => {
  let component: ObservableShoppingCart;
  let fixture: ComponentFixture<ObservableShoppingCart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObservableShoppingCart],
    }).compileComponents();

    fixture = TestBed.createComponent(ObservableShoppingCart);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
