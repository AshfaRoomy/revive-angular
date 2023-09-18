import { Component, Input } from '@angular/core';
import { OrderService } from '../services/OrderServices.service';

@Component({
  selector: 'app-customer-order-item-list',
  templateUrl: './customer-order-item-list.component.html',
  styleUrls: ['./customer-order-item-list.component.css']
})
export class CustomerOrderItemListComponent {
  orderList;
  
  count = 0;
  constructor(private orderService: OrderService) { 

  }

  ngOnInit() {

    this.orderService.onGetAllOrderByUser().subscribe(data => {
      console.log("ordersList: ",data);
      this.orderList = data;
      this.count = this.orderList.length;
    });
    // this.orderService.updateOrderList.subscribe(() => {
    //   this.orderService.onGetAllCartOrdersByUserId().subscribe(data => {
    //     this.ordersList = data;
    //     this.count = this.ordersList.length;
      // });
    // });

    // this.orderService.updateOrder.subscribe((data: Orders) => {
    //   const index = this.ordersList.findIndex(order => this.custOrderElement.ordersId === data.ordersId);

    //   if (index !== -1) {
    //     this.ordersList[index] = data;
    //   }
    // });
  }
}
