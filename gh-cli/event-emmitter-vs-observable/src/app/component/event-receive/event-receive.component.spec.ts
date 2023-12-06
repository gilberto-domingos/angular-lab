import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventReceiveComponent } from './event-receive.component';

describe('EventReceiveComponent', () => {
  let component: EventReceiveComponent;
  let fixture: ComponentFixture<EventReceiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventReceiveComponent]
    });
    fixture = TestBed.createComponent(EventReceiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
