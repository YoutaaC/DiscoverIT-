import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterVisiteurComponent } from './footer-visiteur.component';

describe('FooterVisiteurComponent', () => {
  let component: FooterVisiteurComponent;
  let fixture: ComponentFixture<FooterVisiteurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterVisiteurComponent]
    });
    fixture = TestBed.createComponent(FooterVisiteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
