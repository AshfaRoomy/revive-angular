import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductRateReviewDetailComponent } from './product-rate-review-detail.component';

describe('ProductRateReviewDetailComponent', () => {
  let component: ProductRateReviewDetailComponent;
  let fixture: ComponentFixture<ProductRateReviewDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductRateReviewDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductRateReviewDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
