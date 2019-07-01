import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBuider2Component } from './form-buider2.component';

describe('FormBuider2Component', () => {
  let component: FormBuider2Component;
  let fixture: ComponentFixture<FormBuider2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormBuider2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormBuider2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
