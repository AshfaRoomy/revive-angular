import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryProductItemComponent } from './category-product-item.component';

describe('CategoryProductItemComponent', () => {
  let component: CategoryProductItemComponent;
  let fixture: ComponentFixture<CategoryProductItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryProductItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryProductItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
