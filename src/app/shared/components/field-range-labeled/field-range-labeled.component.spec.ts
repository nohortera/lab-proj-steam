import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldRangeLabeledComponent } from './field-range-labeled.component';

describe('FieldRangeLabeledComponent', () => {
  let component: FieldRangeLabeledComponent;
  let fixture: ComponentFixture<FieldRangeLabeledComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FieldRangeLabeledComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldRangeLabeledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
