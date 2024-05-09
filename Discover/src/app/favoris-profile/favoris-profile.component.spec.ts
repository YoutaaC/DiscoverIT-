import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavorisProfileComponent } from './favoris-profile.component';

describe('FavorisProfileComponent', () => {
  let component: FavorisProfileComponent;
  let fixture: ComponentFixture<FavorisProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FavorisProfileComponent]
    });
    fixture = TestBed.createComponent(FavorisProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
