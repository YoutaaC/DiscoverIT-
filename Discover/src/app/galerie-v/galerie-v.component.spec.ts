import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalerieVComponent } from './galerie-v.component';

describe('GalerieVComponent', () => {
  let component: GalerieVComponent;
  let fixture: ComponentFixture<GalerieVComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GalerieVComponent]
    });
    fixture = TestBed.createComponent(GalerieVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
