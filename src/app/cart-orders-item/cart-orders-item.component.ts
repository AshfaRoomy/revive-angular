import { Component, Input, OnInit } from '@angular/core';
import { CartOrders } from '../models/CartOrders';

@Component({
  selector: 'app-cart-orders-item',
  templateUrl: './cart-orders-item.component.html',
  styleUrls: ['./cart-orders-item.component.css']
})
export class CartOrdersItemComponent implements OnInit {

  @Input() cartOrderElement;
  @Input() index;
  constructor() { 

  }

  ngOnInit() {
  }

}