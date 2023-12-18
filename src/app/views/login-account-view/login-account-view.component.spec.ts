import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginAccountViewComponent } from './login-account-view.component';

describe('LoginAccountViewComponent', () => {
  let component: LoginAccountViewComponent;
  let fixture: ComponentFixture<LoginAccountViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginAccountViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoginAccountViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
