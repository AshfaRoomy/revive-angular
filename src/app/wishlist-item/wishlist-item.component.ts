import { Component, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { TokenStorage } from '../services/TokenStorage.service';
import { WishlistService } from '../services/WishlistService.service';
import { CartService } from '../services/CartService.service';

@Component({
  selector: 'app-wishlist-item',
  templateUrl: './wishlist-item.component.html',
  styleUrls: ['./wishlist-item.component.css']
})
export class WishlistItemComponent {
  count;

  @Input() wishlist;

  constructor(private toastr: ToastrService, private tokenStorage: TokenStorage, private wishlistService: WishlistService, private cartService: CartService) { }

  ngOnint() {
    this.wishlistService.onGetAllWishlistByUserIdService().subscribe(data => {
      this.wishlist = data;
      this.count = this.wishlist.length;
    });
    this.wishlistService.wishListListChange.subscribe(userId => {
      this.wishlistService.onGetAllWishlistByUserIdService().subscribe(data => {
        this.wishlist = data;
        this.count = this.wishlist.length;
      });
    });
  }

  onRemoveWishlistItem(productId) {
    this.wishlistService.onAddRemoveWishlistService(productId).subscribe(data => {
      console.log(data);
      this.wishlistService.onGetAllWishlistByUserIdService().subscribe(data => {

        this.wishlistService.wishListListChange.next(data);
      });
      // this.wishlistService.wishListListCountChange.next();

      this.toastr.success("Successfully removed from wishlist");
    },
      err => {
        this.toastr.error("System error");

      });
  }

  onAddToCart(productId,price){
    const totalAmount =  1 * price;
    this.cartService.onAddCartService(this.wishlist.product.productId, 1, totalAmount).subscribe(data => {
      console.log(data);
      // this.cartService.cartListCountChange.next();
      this.onRemoveWishlistItem(productId);
      this.toastr.success(data.message);
    });
  }
}
