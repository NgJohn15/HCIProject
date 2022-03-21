import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicCartComponent } from './dynamic-cart.component';

describe('DynamicCartComponent', () => {
  let component: DynamicCartComponent;
  let fixture: ComponentFixture<DynamicCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicCartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
