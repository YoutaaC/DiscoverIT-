import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActuVisiteur2Component } from './actu-visiteur2.component';

describe('ActuVisiteur2Component', () => {
  let component: ActuVisiteur2Component;
  let fixture: ComponentFixture<ActuVisiteur2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActuVisiteur2Component]
    });
    fixture = TestBed.createComponent(ActuVisiteur2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
