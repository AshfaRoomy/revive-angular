import { Component } from '@angular/core';
import { OrderService } from '../services/OrderServices.service';

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.css']
})
export class AdminOrdersComponent {
//access getallordedrs
orderList;
  
count;
constructor(private orderService: OrderService) { }

ngOnInit() {
  this.orderService.onGetAllOrders().subscribe(data => {
    this.orderList = data;
  });
  

  this.orderService.updateOrderList.subscribe(data => {
    this.orderList = data;
  });

    
  }
}
