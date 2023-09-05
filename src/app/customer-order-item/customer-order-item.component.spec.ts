import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerOrderItemComponent } from './customer-order-item.component';

describe('CustomerOrderItemComponent', () => {
  let component: CustomerOrderItemComponent;
  let fixture: ComponentFixture<CustomerOrderItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerOrderItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerOrderItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
