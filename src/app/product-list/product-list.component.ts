import { Component, Input } from '@angular/core';
import { ProductService } from '../services/ProductService.service';
import { Product } from '../models/Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  @Input() product: Product;
  productList;

  constructor(private productService: ProductService) {
    
   }


  ngOnInit() {
    this.productService.onGetAllProducts().subscribe(data => {
      this.productList = data;
    });
    this.productService.productListUpdate.subscribe(data => {
      this.productList = data;
    });
    

  }
}
