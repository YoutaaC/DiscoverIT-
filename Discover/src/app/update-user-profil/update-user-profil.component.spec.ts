import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateUserProfilComponent } from './update-user-profil.component';

describe('UpdateUserProfilComponent', () => {
  let component: UpdateUserProfilComponent;
  let fixture: ComponentFixture<UpdateUserProfilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateUserProfilComponent]
    });
    fixture = TestBed.createComponent(UpdateUserProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
