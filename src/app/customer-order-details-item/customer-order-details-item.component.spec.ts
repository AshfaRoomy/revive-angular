import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerOrderDetailsItemComponent } from './customer-order-details-item.component';

describe('CustomerOrderDetailsItemComponent', () => {
  let component: CustomerOrderDetailsItemComponent;
  let fixture: ComponentFixture<CustomerOrderDetailsItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerOrderDetailsItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerOrderDetailsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
