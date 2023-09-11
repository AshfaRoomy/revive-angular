import { Component, Input } from '@angular/core';
import { Product } from '../models/Product';
import { ProductService } from '../services/ProductService.service';

@Component({
  selector: 'app-recommended-product-list',
  templateUrl: './recommended-product-list.component.html',
  styleUrls: ['./recommended-product-list.component.css']
})
export class RecommendedProductListComponent {
  @Input() product: Product;
  recmndproductList: Product[] = [];
  

  constructor(private productService: ProductService){

  }

  ngOnInit(){
    this.productService.onGetAllProducts().subscribe(data => {
      this.recmndproductList = data;
      console.log("get the recommended list:",data);
      this.shuffleArray(this.recmndproductList);
        console.log("The shuffled array please", this.recmndproductList);
    });
  }

  shuffleArray(array: Product[]): void {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
  }

}
