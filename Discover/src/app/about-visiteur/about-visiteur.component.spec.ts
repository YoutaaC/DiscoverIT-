import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutVisiteurComponent } from './about-visiteur.component';

describe('AboutVisiteurComponent', () => {
  let component: AboutVisiteurComponent;
  let fixture: ComponentFixture<AboutVisiteurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutVisiteurComponent]
    });
    fixture = TestBed.createComponent(AboutVisiteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
