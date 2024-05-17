import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActuEcommerceComponent } from './actu-ecommerce.component';

describe('ActuEcommerceComponent', () => {
  let component: ActuEcommerceComponent;
  let fixture: ComponentFixture<ActuEcommerceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActuEcommerceComponent]
    });
    fixture = TestBed.createComponent(ActuEcommerceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
