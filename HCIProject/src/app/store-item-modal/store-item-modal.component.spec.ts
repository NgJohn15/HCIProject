import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreItemModalComponent } from './store-item-modal.component';

describe('StoreItemModalComponent', () => {
  let component: StoreItemModalComponent;
  let fixture: ComponentFixture<StoreItemModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreItemModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreItemModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
