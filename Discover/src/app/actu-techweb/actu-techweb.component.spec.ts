import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActuTechwebComponent } from './actu-techweb.component';

describe('ActuTechwebComponent', () => {
  let component: ActuTechwebComponent;
  let fixture: ComponentFixture<ActuTechwebComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActuTechwebComponent]
    });
    fixture = TestBed.createComponent(ActuTechwebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
