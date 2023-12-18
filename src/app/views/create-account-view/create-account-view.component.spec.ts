import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAccountViewComponent } from './create-account-view.component';

describe('CreateAccountViewComponent', () => {
  let component: CreateAccountViewComponent;
  let fixture: ComponentFixture<CreateAccountViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateAccountViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateAccountViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
