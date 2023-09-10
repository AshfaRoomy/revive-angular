import { Component, Input } from '@angular/core';
import { Product } from '../../models/Product';
import { AuthenticationService } from 'src/app/services/AuthenticationService.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/services/CartService.service';
import { WishlistService } from 'src/app/services/WishlistService.service';

@Component({
  selector: 'app-category-product-item',
  templateUrl: './category-product-item.component.html',
  styleUrls: ['./category-product-item.component.css']
})
export class CategoryProductItemComponent {
  @Input() productElement: Product;
  isFavourite: boolean;
  wishlistProduct: any;
  average;
  constructor(
    private authenticationService: AuthenticationService,
    private toastr: ToastrService,
    private wishlistService: WishlistService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private cartService: CartService
  ) { }

  ngOnInit() {
    if (this.authenticationService.loggedIn()) {
      this.wishlistService.getAWishlistProductService(this.productElement.productId).subscribe((data) => {
        this.wishlistProduct = data;
        if (data != null) {
          if (this.wishlistProduct.product.productId == this.productElement.productId) {
            this.isFavourite = true
          }
          else {
            this.isFavourite = false;
          }
        }
      });
    }
  }
  quickView(productId) {
    this.router.navigate(["/detail/" + productId], { relativeTo: this.activatedRoute })
  }
  onAddToCart(productId,price){
    if (this.authenticationService.loggedIn()){
      const totalAmount =  1 * price;
      this.cartService.onAddCartService(productId, 1, totalAmount).subscribe(data => {
        console.log(data);
        // this.cartService.cartListCountChange.next();
        this.toastr.success(data.message);
      });
    }else{
      this.router.navigate(['login']);

      this.toastr.warning("Please login to add product to your cart");

    }
    
  }

  onAddRemoveWishlist(productId) {
    if (this.authenticationService.loggedIn()) {
      this.wishlistService.onAddRemoveWishlistService(productId).subscribe((data: any) => {
        if (this.isFavourite == true) {
          this.isFavourite = false;
          this.wishlistService.wishListFavouriteChange.next(this.isFavourite);
          this.toastr.success(data.message);
        }
        else {
          this.isFavourite = true;
          this.wishlistService.wishListFavouriteChange.next(this.isFavourite);
          this.toastr.success("Added to your wishlist");
        }
      },
        err => {
          this.toastr.error("Something went wong with the system", "Could not peform the function");
        }
      );
    } else {
      this.toastr.warning("Please login to add product to your wishlist")
    }
  }
}
