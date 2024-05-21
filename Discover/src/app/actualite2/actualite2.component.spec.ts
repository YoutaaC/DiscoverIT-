import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Actualite2Component } from './actualite2.component';

describe('Actualite2Component', () => {
  let component: Actualite2Component;
  let fixture: ComponentFixture<Actualite2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Actualite2Component]
    });
    fixture = TestBed.createComponent(Actualite2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
