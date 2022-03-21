import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Test0DialogComponent } from './test0-dialog.component';

describe('Test0DialogComponent', () => {
  let component: Test0DialogComponent;
  let fixture: ComponentFixture<Test0DialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Test0DialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Test0DialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
