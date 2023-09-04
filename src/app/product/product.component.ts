import { Component, Input } from '@angular/core';
import { Product } from '../models/Product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/ProductService.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent {
  @Input() productItem: Product;
  @Input() index: number;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private productService: ProductService, private toastr: ToastrService) {
    
   }

  ngOnInit() {
    this.productService.productUpdate.subscribe(data => {
      this.productItem = data;
    });
  }

  onDelete(productId) {
    this.productService.onDeleteById(productId).subscribe
      (data => {
        console.log(data);
        this.toastr.success(data.message);
        this.productService.onGetAllProducts().subscribe(data => {
          this.productService.productListUpdate.next(data);
        });
      },
        (err) => {
          console.log("error");
          this.toastr.error(err.error.message);
        }


      );
  }
}
