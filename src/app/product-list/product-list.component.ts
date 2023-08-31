import { Component } from '@angular/core';
import { ProductService } from '../services/ProductService.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  productList;

  constructor(private productService: ProductService) { }


  ngOnInit() {
    this.productService.onGetAllProducts().subscribe(data => {
      this.productList = data;
    });
    this.productService.productListUpdate.subscribe(data => {
      this.productList = data;
    });
  }
}
