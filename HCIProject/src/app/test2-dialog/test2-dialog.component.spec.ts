import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Test2DialogComponent } from './test2-dialog.component';

describe('Test2DialogComponent', () => {
  let component: Test2DialogComponent;
  let fixture: ComponentFixture<Test2DialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Test2DialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Test2DialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
