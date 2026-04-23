import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthCheckBack } from './health-check-back';

describe('HealthCheckBack', () => {
  let component: HealthCheckBack;
  let fixture: ComponentFixture<HealthCheckBack>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HealthCheckBack],
    }).compileComponents();

    fixture = TestBed.createComponent(HealthCheckBack);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
