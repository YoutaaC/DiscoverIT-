import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActuEcommerceVisitComponent } from './actu-ecommerce-visit.component';

describe('ActuEcommerceVisitComponent', () => {
  let component: ActuEcommerceVisitComponent;
  let fixture: ComponentFixture<ActuEcommerceVisitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActuEcommerceVisitComponent]
    });
    fixture = TestBed.createComponent(ActuEcommerceVisitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
