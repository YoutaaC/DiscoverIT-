import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepondreMessageComponent } from './repondre-message.component';

describe('RepondreMessageComponent', () => {
  let component: RepondreMessageComponent;
  let fixture: ComponentFixture<RepondreMessageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RepondreMessageComponent]
    });
    fixture = TestBed.createComponent(RepondreMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
