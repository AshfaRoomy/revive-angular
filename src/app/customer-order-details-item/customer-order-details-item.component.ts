import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { OrderService } from '../services/OrderServices.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-customer-order-details-item',
  templateUrl: './customer-order-details-item.component.html',
  styleUrls: ['./customer-order-details-item.component.css']
})
export class CustomerOrderDetailsItemComponent implements OnInit {

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private orderService: OrderService, private toastr: ToastrService) { }
  id;
  date;
  total;
  address;
 username;

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = +params['id'];
      console.log("look: " + this.id);
      this.orderService.onGetAOrderById(this.id).subscribe(data => {
        console.log(data);
        this.id = data.ordersId;
        this.username = data.user.username;
        this.date = data.date;
        this.address = data.address;
        this.total = data.total;
      });
    });
  }
  
  // isPendidngAdvancedRoute(): boolean {
  //   return this.location.path().indexOf('/pending') > -1;
  // }
  // isCompleteAdvancedRoute(): boolean {
  //   return this.location.path().indexOf('/completed') > -1;
  // }
  // isCancelledAdvancedRoute(): boolean {
  //   return this.location.path().indexOf('/cancelled') > -1;
  // }
  // onOrdersStateChange() {
  //   if (this.isPendidngAdvancedRoute()) {
  //     this.onCancelOrder();

  //   } else if (this.isCancelledAdvancedRoute()) {
  //     this.onReOrder();
  //   }
  // }

  onReOrder() {
    // this.orderService.onUpdateOrderStatusByOrderId("Pending", this.id).subscribe(data => {
    //   console.log(data);
    //   this.toastr.success("Your order has been re-ordered as pending")
    //   this.router.navigate(['pending']);
    // },
    //   err => {
    //     this.toastr.error("System couldnt perform the re-ordered of the order")
    //   });
  }

  onCancelOrder() {
    // this.orderService.onUpdateOrderStatusByOrderId("Cancelled", this.id).subscribe(data => {
    //   console.log(data);
    //   this.toastr.success("Your order has been cancelled")
    //   this.router.navigate(['cancelled']);
    // },
    //   err => {
    //     this.toastr.error("System couldnt perform the cancelling of the order")
    //   });
  }  
  
}
