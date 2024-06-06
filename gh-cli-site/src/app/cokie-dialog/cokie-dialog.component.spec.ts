import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CokieDialogComponent } from './cokie-dialog.component';

describe('CokieDialogComponent', () => {
  let component: CokieDialogComponent;
  let fixture: ComponentFixture<CokieDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CokieDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CokieDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
