import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/OrderServices.service';
import { ActivatedRoute, Params } from '@angular/router';
import { CartOrders } from '../models/CartOrders';

@Component({
  selector: 'app-cart-orders-list',
  templateUrl: './cart-orders-list.component.html',
  styleUrls: ['./cart-orders-list.component.css']
})
export class CartOrdersListComponent implements OnInit {
  cartOrdersList; id;
  list;

  constructor(private ordersService: OrderService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    // this.activatedRoute.params.subscribe(
    //   (params: Params) => {
    //     this.id = +params['id'];
    //     console.log("this is id: " + this.id);
    //     this.ordersService.onGetAllCartByOrderId(this.id).subscribe((data:CartOrders[]) => {
    //       console.log("cart-orders working");
    //       this.cartOrdersList = data;
    //       console.log(data);
    //     });
    //   }
    // );
    this.ordersService.onGetAllCartOrders().subscribe(data => {
      this.list = data;
      for(let x in this.list){
        let orderId = this.list[x].orders.ordersId;
      this.ordersService.onGetAllCartByOrderId(orderId).subscribe((orderdata:CartOrders[]) => {
        this.cartOrdersList = orderdata;
        console.log(this.cartOrdersList)
      });      
      }
    });

    // this.blogService.blogListUpdate.subscribe(data => {
    //   this.blogList = data;
    // });
  }
}