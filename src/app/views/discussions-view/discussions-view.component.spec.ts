import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscussionsViewComponent } from './discussions-view.component';

describe('DiscussionsViewComponent', () => {
  let component: DiscussionsViewComponent;
  let fixture: ComponentFixture<DiscussionsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiscussionsViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DiscussionsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
