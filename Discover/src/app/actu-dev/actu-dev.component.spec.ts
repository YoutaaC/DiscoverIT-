import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActuDevComponent } from './actu-dev.component';

describe('ActuDevComponent', () => {
  let component: ActuDevComponent;
  let fixture: ComponentFixture<ActuDevComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActuDevComponent]
    });
    fixture = TestBed.createComponent(ActuDevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
