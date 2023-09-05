import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../models/User';
import { UserService } from '../services/UserService.service';
import { DatePipe } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../services/CartService.service';
import { CartOrders } from '../models/CartOrders';
import { OrderService } from '../services/OrderServices.service';
import { Product } from '../models/Product';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.css']
})
export class PaymentFormComponent {
  @Input() cart;
  @Input() totPrice;
  paymentForm: FormGroup;
  isDisabled: boolean = true;
  email;
  username;
  phone;
  currentDate = new Date();
  currentDateFormatted;
  user: User;
  userId;
  cartList;
  savedOrder;
  cartOrders: CartOrders;

  constructor(private userService: UserService, private datepipe: DatePipe, private toastr: ToastrService,
    private orderService: OrderService, private router: Router, private cartService: CartService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    //get the user details - service
    this.initForm();
    this.currentDateFormatted = this.datepipe.transform(this.currentDate, 'dd/MM/yyyy hh:mm')
    this.userService.onGetAUserService().subscribe(data => {
        this.username = data.username;
        this.initForm();
    });
    this.cartService.cartTotalUpdate.subscribe((data) => {
        this.totPrice = data;

    });
  }

  initForm() {
    this.userService.onGetAUserService().subscribe((data) => {
      this.paymentForm.controls['username'].disable();
      this.paymentForm.setValue({
        username: data.username,
        phone: data.phone,
        address: data.address

      });
    });
    // this.paymentForm = new FormGroup({
      
    //   'username': new FormControl(null, Validators.required),
    //   'phone': new FormControl('',  Validators.required),
    //   'address': new FormControl(null, Validators.required)
    // });
    this.paymentForm = new FormGroup({
      
      'username': new FormControl(null, Validators.required),
      'phone': new FormControl('', [ Validators.required,
        Validators.pattern("^[0-9]*$"),
        Validators.minLength(10), Validators.maxLength(10)]),
      'address': new FormControl(null, Validators.required)
    });
  }

  onClose() {
    this.router.navigate(['./'], { relativeTo: this.activatedRoute });
  }

  onPayment() {
        this.orderService.onAddOrdersService(this.paymentForm, this.currentDateFormatted, this.totPrice).subscribe(data => {
            this.savedOrder = data;
            console.log("data here look: ",data)
            this.cartService.onGetAllCartItemByCustomerIdService().subscribe(data => {
                this.cartList = data;
                console.log("other data zoro: ", this.cartList)
                for (let cart of this.cartList) {
                    this.cartOrders = new CartOrders(this.savedOrder, cart);
                    console.log("data here: ",this.cartOrders)
                    this.orderService.onAddCartOrdersService(this.cartOrders).subscribe(datal => {
                      console.log("datal: ",datal)
                        this.cartService.onGetAllCartItemByCustomerIdService().subscribe(data => {
                          console.log("cart list count here: ",data)
                            // this.cartService.cartListCountChange.next(data);
                        });

                        this.paymentForm.reset();
                        // this.onClose();

                        // this.toastr.success("Your order is completed successfully!");
                        this.onClose();
                        this.router.navigate(['order-confirmation']);

                    }, err => {
                        console.log("details", this.currentDateFormatted, this.totPrice, this.paymentForm)
                        this.toastr.error("Please try again later", "System failed to make your payments");
                    });
                }
                this.toastr.success("Your order is completed successfully, please wait for it to be delivered!")
            }
            )
        }

        )
  }
  

}
