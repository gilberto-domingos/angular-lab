import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CokieComponent } from './cokie.component';

describe('CokieComponent', () => {
  let component: CokieComponent;
  let fixture: ComponentFixture<CokieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CokieComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CokieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
