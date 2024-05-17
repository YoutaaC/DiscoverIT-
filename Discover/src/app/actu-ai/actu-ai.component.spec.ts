import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActuAiComponent } from './actu-ai.component';

describe('ActuAiComponent', () => {
  let component: ActuAiComponent;
  let fixture: ComponentFixture<ActuAiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActuAiComponent]
    });
    fixture = TestBed.createComponent(ActuAiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
