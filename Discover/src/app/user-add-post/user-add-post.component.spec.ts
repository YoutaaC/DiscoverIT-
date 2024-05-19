import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAddPostComponent } from './user-add-post.component';

describe('UserAddPostComponent', () => {
  let component: UserAddPostComponent;
  let fixture: ComponentFixture<UserAddPostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserAddPostComponent]
    });
    fixture = TestBed.createComponent(UserAddPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
