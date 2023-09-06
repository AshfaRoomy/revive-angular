import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from '../services/ProductService.service';
import { AuthenticationService } from '../services/AuthenticationService.service';
import { WishlistService } from '../services/WishlistService.service';
import { Product } from '../models/Product';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CartService } from '../services/CartService.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  feature1: String;
  feature2: String;
  feature3: String;
  feature4: String;
  feature5: String;
  @Input() productElement: Product;
  cosmeticProductList;
  skinCareProductList;
  hairCareProductList;

  isFavourite: boolean;
  wishlistProduct: any;

  constructor(private productService: ProductService, private authenticationService: AuthenticationService, private wishlistService: WishlistService, private activatedRoute: ActivatedRoute, private toastr: ToastrService, private router: Router, private cartService: CartService) {
    this.feature1 = 'assets/images/features/f1.png';
    this.feature2 = 'assets/images/features/f2.png';
    this.feature3 = 'assets/images/features/f3.png';
    this.feature4 = 'assets/images/features/f4.png';
    this.feature5 = 'assets/images/features/f5.png';
  

  }



  ngOnInit() {
    this.productService.onGetAllProductByCategoryName("cosmetics").subscribe(data => {
      this.cosmeticProductList = data;
      console.log(data);
    });
    this.productService.onGetAllProductByCategoryName("haircare").subscribe(data => {
      this.hairCareProductList = data;
      console.log(data);
    });
    this.productService.onGetAllProductByCategoryName("skincare").subscribe(data => {
      this.skinCareProductList = data;
      console.log(data);
    });
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
