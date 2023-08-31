import { Component, Input, ViewChild } from '@angular/core';
import { CartService } from 'src/app/services/CartService.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent {
  @Input() cart;
  @Input() index;
  @ViewChild('qty') qty: HTMLInputElement;
  @Input() total;
  totPrice;
  cartList;
  constructor(private cartService: CartService) {

  }

  ngOnInit() {
    this.totPrice = this.cart.product.price * this.cart.cartQuantity ;
  }
 

  decrementQuantity(cartId) {
    if (this.cart.cartQuantity > 1) {
      this.cart.cartQuantity = this.cart.cartQuantity - 1;
    }
    this.totPrice = this.cart.cartQuantity * this.cart.product.price;
    this.cartService.onUpdateCartItem(cartId, this.cart.cartQuantity).subscribe(data => {
      this.cartService.onGetAllCartItemByCustomerIdService().subscribe(data => {
        let updatedPrice = 0;
        for (let cart of data) {

          updatedPrice += cart.totalPrice;

        }
        this.cartService.cartTotalUpdate.next(updatedPrice);

      });

    })



  }
  incrementQuantity(cartId) {
    this.cart.cartQuantity = this.cart.cartQuantity + 1;
    this.totPrice = this.cart.cartQuantity * this.cart.product.price;
    this.cartService.onUpdateCartItem(cartId, this.cart.cartQuantity).subscribe(data => {

      this.cartService.onGetAllCartItemByCustomerIdService().subscribe(data => {
        let updatedPrice = 0;
        for (let cart of data) {

          updatedPrice += cart.totalPrice;

        }
        this.cartService.cartTotalUpdate.next(updatedPrice);

      });
    })

  }

  onRemoveCartProduct(cartId) {
    this.cartService.onDeleteCartIdService(cartId).subscribe(data => {
      this.cartService.onGetAllCartItemByCustomerIdService().subscribe(data => {
        this.cartService.cartListUpdate.next(data);
        // this.cartService.cartListCountChange.next();
      });
    });
  }

  // onCalculateTotal() {
  //   let total = 0;
  //   for (let cart of this.cartList) {
  //     total += cart.totalPrice;
  //   }

  //   return total;
  // }
}
