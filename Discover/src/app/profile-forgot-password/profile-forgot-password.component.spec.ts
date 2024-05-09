import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileForgotPasswordComponent } from './profile-forgot-password.component';

describe('ProfileForgotPasswordComponent', () => {
  let component: ProfileForgotPasswordComponent;
  let fixture: ComponentFixture<ProfileForgotPasswordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileForgotPasswordComponent]
    });
    fixture = TestBed.createComponent(ProfileForgotPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
