import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetAccountViewComponent } from './reset-account-view.component';

describe('ResetAccountViewComponent', () => {
  let component: ResetAccountViewComponent;
  let fixture: ComponentFixture<ResetAccountViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResetAccountViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResetAccountViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
