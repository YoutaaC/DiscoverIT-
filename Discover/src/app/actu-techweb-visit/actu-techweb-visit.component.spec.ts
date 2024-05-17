import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActuTechwebVisitComponent } from './actu-techweb-visit.component';

describe('ActuTechwebVisitComponent', () => {
  let component: ActuTechwebVisitComponent;
  let fixture: ComponentFixture<ActuTechwebVisitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActuTechwebVisitComponent]
    });
    fixture = TestBed.createComponent(ActuTechwebVisitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
