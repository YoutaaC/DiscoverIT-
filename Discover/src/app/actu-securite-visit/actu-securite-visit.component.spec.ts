import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActuSecuriteVisitComponent } from './actu-securite-visit.component';

describe('ActuSecuriteVisitComponent', () => {
  let component: ActuSecuriteVisitComponent;
  let fixture: ComponentFixture<ActuSecuriteVisitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActuSecuriteVisitComponent]
    });
    fixture = TestBed.createComponent(ActuSecuriteVisitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
