import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Transloco } from './transloco';

describe('Transloco', () => {
  let component: Transloco;
  let fixture: ComponentFixture<Transloco>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Transloco],
    }).compileComponents();

    fixture = TestBed.createComponent(Transloco);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
