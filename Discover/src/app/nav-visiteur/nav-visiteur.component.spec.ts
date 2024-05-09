import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavVisiteurComponent } from './nav-visiteur.component';

describe('NavVisiteurComponent', () => {
  let component: NavVisiteurComponent;
  let fixture: ComponentFixture<NavVisiteurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavVisiteurComponent]
    });
    fixture = TestBed.createComponent(NavVisiteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
