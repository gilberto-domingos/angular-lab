import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObserveReceiveComponent } from './observe-receive.component';

describe('ObserveReceiveComponent', () => {
  let component: ObserveReceiveComponent;
  let fixture: ComponentFixture<ObserveReceiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ObserveReceiveComponent]
    });
    fixture = TestBed.createComponent(ObserveReceiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
