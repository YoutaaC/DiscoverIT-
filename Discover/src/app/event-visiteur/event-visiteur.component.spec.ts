import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventVisiteurComponent } from './event-visiteur.component';

describe('EventVisiteurComponent', () => {
  let component: EventVisiteurComponent;
  let fixture: ComponentFixture<EventVisiteurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventVisiteurComponent]
    });
    fixture = TestBed.createComponent(EventVisiteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
