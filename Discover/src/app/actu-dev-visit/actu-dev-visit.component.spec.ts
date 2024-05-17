import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActuDevVisitComponent } from './actu-dev-visit.component';

describe('ActuDevVisitComponent', () => {
  let component: ActuDevVisitComponent;
  let fixture: ComponentFixture<ActuDevVisitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActuDevVisitComponent]
    });
    fixture = TestBed.createComponent(ActuDevVisitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
