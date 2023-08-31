import { Component, ViewChild } from '@angular/core';
import { Product } from '../models/Product';
import { ProductService } from '../services/ProductService.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CartService } from '../services/CartService.service';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from '../services/AuthenticationService.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-quick-view',
  templateUrl: './quick-view.component.html',
  styleUrls: ['./quick-view.component.css']
})
export class QuickViewComponent {
  product: Product;
  productId: number;
  qty: number = 1;
  loading: String;

  constructor(private location: Location, private productService: ProductService, private activatedRoute: ActivatedRoute, private router: Router, private cartService: CartService, private toastr: ToastrService, public authenticationService: AuthenticationService) { 
    this.loading = 'assets/images/loading1.png';

  }

  ngOnInit() {
    this.productId = +(this.activatedRoute.snapshot.params['id']);
    this.activatedRoute.params.subscribe(
      (params: Params) => {
        this.productId = +params['id'];
        this.productService.onGetProductById(this.productId).subscribe((data: Product) => {
          console.log(data);
          this.product = data
        })

      });

    
  }
  onBack() {
    this.location.back();
  }
  cartQuantity;
totalAmount;
@ViewChild('selectedQuantity') selectedQuantity: any;

  onAddToCart(){
    // if (this.selectedQuantity.nativeElement.value == '') {
    //   this.toastr.error("Quantity not given", "Please select your quantity");
    // } else {
      if (this.authenticationService.loggedIn()) {
        this.cartQuantity = this.selectedQuantity.nativeElement.value;
      const onePrice = this.product.price;
      this.totalAmount = onePrice * this.cartQuantity;
      console.log( onePrice +' * '+ this.cartQuantity+ ' = '+this.totalAmount)
      // console.log(this.id+" = "+this.cartQuantity+" = "+cartSize+ " = "+this.totalAmount)
      this.cartService.onAddCartService(this.productId, Number(this.cartQuantity), this.totalAmount).subscribe(data => {
        console.log(data);
        // this.cartService.cartListCountChange.next();
        this.toastr.success(data.message);
      },
      err => {
        this.toastr.error("Sorry! Couldnt add to the cart something went wrong");
      } );
      }else {
        this.toastr.warning("Plese login to add product to your cart");
      }
      
    
  }


    
  
  // onAddToCart(qty: any) {
  //   if (this.authenticationService.loggedIn()) {
  //     console.log(this.productId, qty);
  //     let total = this.product.price * qty;
  //     this.cartService.onAddCartService(this.productId,qty,total).subscribe(data => {
  //       this.cartService.cartListCountChange.next(data);
  //       console.log(data);

  //       // this.cartService.onGetAllCartItemByCustomerIdService(this.productId).subscribe(data => {
  //       //   this.cartService.cartListCountChange.next(data);
  //       // }); 
  //       // this.cartService.cartListCountChange.subscribe(() => {
  //       //   this.onGetCartListCount();
  //       // });       
  //       this.toastr.success(data.message);
  //     },
  //       err => {
  //         this.toastr.error("Sorry! Couldnt add to the cart something went wrong");
  //       });

  //   } else {
  //     this.toastr.warning("Plese login to add product to your cart");
  //   }

  // }
  onClose() {
    this.location.back();

  }

}


