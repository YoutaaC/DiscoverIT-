import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminActuComponent } from './admin-actu.component';

describe('AdminActuComponent', () => {
  let component: AdminActuComponent;
  let fixture: ComponentFixture<AdminActuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminActuComponent]
    });
    fixture = TestBed.createComponent(AdminActuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
