import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActuVisiteurComponent } from './actu-visiteur.component';

describe('ActuVisiteurComponent', () => {
  let component: ActuVisiteurComponent;
  let fixture: ComponentFixture<ActuVisiteurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActuVisiteurComponent]
    });
    fixture = TestBed.createComponent(ActuVisiteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
