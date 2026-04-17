import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableStudy } from './observable-study';

describe('ObservableStudy', () => {
  let component: ObservableStudy;
  let fixture: ComponentFixture<ObservableStudy>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObservableStudy],
    }).compileComponents();

    fixture = TestBed.createComponent(ObservableStudy);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
