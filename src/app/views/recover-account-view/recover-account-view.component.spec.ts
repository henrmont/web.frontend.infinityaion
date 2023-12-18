import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecoverAccountViewComponent } from './recover-account-view.component';

describe('RecoverAccountViewComponent', () => {
  let component: RecoverAccountViewComponent;
  let fixture: ComponentFixture<RecoverAccountViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecoverAccountViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecoverAccountViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
