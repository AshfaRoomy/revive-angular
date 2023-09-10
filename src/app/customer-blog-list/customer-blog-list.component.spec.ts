import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerBlogListComponent } from './customer-blog-list.component';

describe('CustomerBlogListComponent', () => {
  let component: CustomerBlogListComponent;
  let fixture: ComponentFixture<CustomerBlogListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerBlogListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerBlogListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
