import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableHotCold } from './observable-hot-cold';

describe('ObservableHotCold', () => {
  let component: ObservableHotCold;
  let fixture: ComponentFixture<ObservableHotCold>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObservableHotCold],
    }).compileComponents();

    fixture = TestBed.createComponent(ObservableHotCold);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
