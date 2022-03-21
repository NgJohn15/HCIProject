import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Test1DialogComponent } from './test1-dialog.component';

describe('Test1DialogComponent', () => {
  let component: Test1DialogComponent;
  let fixture: ComponentFixture<Test1DialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Test1DialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Test1DialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
