import { Component, Output } from '@angular/core';
import { Route, Router } from '@angular/router';
import { CartService } from 'src/app/services/CartService.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent {
  @Output() totPrice;
  emptycartimg: String;
  cartList;
  count=0;
  // total;
  constructor(private cartService: CartService, private router: Router) {
    this.emptycartimg = 'assets/images/emptycart2.png';
  }

  ngOnInit() {
    this.getAllCartList();
    this.cartService.cartListUpdate.subscribe(updatedData => {
      console.log(this.cartList);
      this.cartList = updatedData;
      this.count = this.cartList.length;
      this.totPrice = this.onCalculateTotal();
    });
    this.cartService.cartTotalUpdate.subscribe((data) => {
      console.log(data);
      this.totPrice = data;

    });

  }
  onCalculateTotal() {
    let total = 0;
    for (let cart of this.cartList) {
      total += cart.totalPrice;
    }


    return total;
  }

  getAllCartList() {
    this.cartService.onGetAllCartItemByCustomerIdService().subscribe(data => {
      console.log(data);
      this.cartList = data;
      this.count = this.cartList.length;
      this.totPrice = this.onCalculateTotal()
    });
  }
  onOrders(){
    this.router.navigate(['orders']);
  }
  
  onHome(){
    this.router.navigate(['home']);
  }
}
