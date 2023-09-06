import { Component } from '@angular/core';
import { WishlistService } from '../services/WishlistService.service';
import { TokenStorage } from '../services/TokenStorage.service';

@Component({
  selector: 'app-wishlist-item-list',
  templateUrl: './wishlist-item-list.component.html',
  styleUrls: ['./wishlist-item-list.component.css']
})
export class WishlistItemListComponent {
  wishlist;
  count = 0;
  emptywishlist: String;

  constructor(private wishListService: WishlistService,
    private tokenStorage: TokenStorage) {
    this.emptywishlist = 'assets/images/empty-wishlist.png';
  }


  ngOnInit() {
    this.wishListService.onGetAllWishlistByUserIdService().subscribe(data => {
      this.wishlist = data;
      this.count = this.wishlist.length;
    });
    this.wishListService.wishListListChange.subscribe(userId => {
      this.wishListService.onGetAllWishlistByUserIdService().subscribe(data => {
        this.wishlist = data;
        this.count = this.wishlist.length;
      });
    });
    this.wishListService.wishListListChange.subscribe(data => {
      this.wishlist = data;
      this.count = this.wishlist.length;

    })
  }

}


