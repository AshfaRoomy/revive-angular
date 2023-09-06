import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Orders } from '../models/Orders';
import { OrderService } from '../services/OrderServices.service';
import { AuthenticationService } from '../services/AuthenticationService.service';

@Component({
  selector: 'app-customer-order-item',
  templateUrl: './customer-order-item.component.html',
  styleUrls: ['./customer-order-item.component.css']
})
export class CustomerOrderItemComponent {
  @Input() custOrderElement;
  @Input() custIndex;

  // @Input() cartOrderElement;
  // @Input() index;
  // cartList;
  // cartOrdersList: CartOrders[] =[];

  constructor(private router:Router,private activatedRoute:ActivatedRoute, public authenticationService: AuthenticationService) { }

  ngOnInit() {
    // this.orderService.onGetAllCartOrdersByUserId().subscribe(data => {
    //   console.log("ordersList: ",data);
    //   this.orderService.onGetAllCartByOrderId(this.cartOrderElement.orders.orderId)
    //   this.count = this.cartOrdersList.length;
    // });

  }
  onOrderDetail(index){
    console.log(index)
    this.router.navigate(['details/'+index],{relativeTo:this.activatedRoute});
  }
}

