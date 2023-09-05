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
  productList: Product[] =[];

  constructor(private productService: ProductService) {
    
   }


  ngOnInit() {
    this.productService.onGetAllProducts().subscribe(data => {
      this.productList = data;
    });
    

    this.productService.productListUpdate.subscribe(data => {
      this.productList = data;
    });

    this.productService.productUpdate.subscribe((data: Product) => {
      // Find the index of the updated product in productList
      const index = this.productList.findIndex(product => product.productId === data.productId);

      if (index !== -1) {
        // Update the product in productList
        this.productList[index] = data;
      }
    });
  }

}

