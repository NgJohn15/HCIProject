import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Test3DialogComponent } from './test3-dialog.component';

describe('Test3DialogComponent', () => {
  let component: Test3DialogComponent;
  let fixture: ComponentFixture<Test3DialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Test3DialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Test3DialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
