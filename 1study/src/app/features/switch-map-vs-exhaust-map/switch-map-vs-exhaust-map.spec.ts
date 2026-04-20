import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchMapVsExhaustMap } from './switch-map-vs-exhaust-map';

describe('SwitchMapVsExhaustMap', () => {
  let component: SwitchMapVsExhaustMap;
  let fixture: ComponentFixture<SwitchMapVsExhaustMap>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwitchMapVsExhaustMap],
    }).compileComponents();

    fixture = TestBed.createComponent(SwitchMapVsExhaustMap);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
