import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActuAiVisitComponent } from './actu-ai-visit.component';

describe('ActuAiVisitComponent', () => {
  let component: ActuAiVisitComponent;
  let fixture: ComponentFixture<ActuAiVisitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActuAiVisitComponent]
    });
    fixture = TestBed.createComponent(ActuAiVisitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
