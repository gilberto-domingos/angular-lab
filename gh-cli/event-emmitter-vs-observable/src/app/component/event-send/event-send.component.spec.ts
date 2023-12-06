import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventSendComponent } from './event-send.component';

describe('EventSendComponent', () => {
  let component: EventSendComponent;
  let fixture: ComponentFixture<EventSendComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventSendComponent]
    });
    fixture = TestBed.createComponent(EventSendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
