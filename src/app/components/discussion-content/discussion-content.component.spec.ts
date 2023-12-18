import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscussionContentComponent } from './discussion-content.component';

describe('DiscussionContentComponent', () => {
  let component: DiscussionContentComponent;
  let fixture: ComponentFixture<DiscussionContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiscussionContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DiscussionContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
