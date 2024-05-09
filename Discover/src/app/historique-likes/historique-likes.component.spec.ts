import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriqueLikesComponent } from './historique-likes.component';

describe('HistoriqueLikesComponent', () => {
  let component: HistoriqueLikesComponent;
  let fixture: ComponentFixture<HistoriqueLikesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HistoriqueLikesComponent]
    });
    fixture = TestBed.createComponent(HistoriqueLikesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
