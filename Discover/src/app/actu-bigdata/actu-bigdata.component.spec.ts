import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActuBigdataComponent } from './actu-bigdata.component';

describe('ActuBigdataComponent', () => {
  let component: ActuBigdataComponent;
  let fixture: ComponentFixture<ActuBigdataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActuBigdataComponent]
    });
    fixture = TestBed.createComponent(ActuBigdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
