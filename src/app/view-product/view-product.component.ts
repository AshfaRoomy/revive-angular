import { Component, Input } from '@angular/core';
import { Product } from '../models/Product';
import { ProductService } from '../services/ProductService.service';
import { ActivatedRoute, Params, Route } from '@angular/router';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent {
  @Input() product: Product;
  productId: number;

  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute) {

  }
  ngOnInit() {
    this.productId = +(this.activatedRoute.snapshot.params['id']);
    this.activatedRoute.params.subscribe(
      (params: Params) => {
        this.productId = +params['id'];
        this.productService.onGetProductById(this.productId).subscribe((data: Product) => {
          this.product = data
        })

      });

    this.productService.productUpdate.subscribe(data => {
      this.product = data;
    });


  }


}
