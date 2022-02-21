import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldRangeComponent } from './field-range.component';

describe('FieldRangeComponent', () => {
  let component: FieldRangeComponent;
  let fixture: ComponentFixture<FieldRangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FieldRangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
