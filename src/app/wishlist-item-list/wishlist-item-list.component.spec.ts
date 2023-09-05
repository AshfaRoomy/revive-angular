import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WishlistItemListComponent } from './wishlist-item-list.component';

describe('WishlistItemListComponent', () => {
  let component: WishlistItemListComponent;
  let fixture: ComponentFixture<WishlistItemListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WishlistItemListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WishlistItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
