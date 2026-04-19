import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableColdHot } from './observable-cold-hot';

describe('ObservableColdHot', () => {
  let component: ObservableColdHot;
  let fixture: ComponentFixture<ObservableColdHot>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObservableColdHot],
    }).compileComponents();

    fixture = TestBed.createComponent(ObservableColdHot);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
