import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActuBigdataVistComponent } from './actu-bigdata-vist.component';

describe('ActuBigdataVistComponent', () => {
  let component: ActuBigdataVistComponent;
  let fixture: ComponentFixture<ActuBigdataVistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActuBigdataVistComponent]
    });
    fixture = TestBed.createComponent(ActuBigdataVistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
