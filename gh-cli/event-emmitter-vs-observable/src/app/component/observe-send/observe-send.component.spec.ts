import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObserveSendComponent } from './observe-send.component';

describe('ObserveSendComponent', () => {
  let component: ObserveSendComponent;
  let fixture: ComponentFixture<ObserveSendComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ObserveSendComponent]
    });
    fixture = TestBed.createComponent(ObserveSendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
