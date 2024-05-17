import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActuSecuriteComponent } from './actu-securite.component';

describe('ActuSecuriteComponent', () => {
  let component: ActuSecuriteComponent;
  let fixture: ComponentFixture<ActuSecuriteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActuSecuriteComponent]
    });
    fixture = TestBed.createComponent(ActuSecuriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
