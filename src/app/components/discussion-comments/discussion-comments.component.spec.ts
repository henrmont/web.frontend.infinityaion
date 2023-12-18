import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscussionCommentsComponent } from './discussion-comments.component';

describe('DiscussionCommentsComponent', () => {
  let component: DiscussionCommentsComponent;
  let fixture: ComponentFixture<DiscussionCommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiscussionCommentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DiscussionCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
