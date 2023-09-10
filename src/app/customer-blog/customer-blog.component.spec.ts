import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerBlogComponent } from './customer-blog.component';

describe('CustomerBlogComponent', () => {
  let component: CustomerBlogComponent;
  let fixture: ComponentFixture<CustomerBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerBlogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
