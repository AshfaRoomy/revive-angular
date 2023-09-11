import { Component, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TokenStorage } from '../../services/TokenStorage.service';
import { AuthenticationService } from '../../services/AuthenticationService.service';
import { ProductService } from '../../services/ProductService.service';
import { Product } from '../../models/Product';

@Component({
  selector: 'app-category-product-list',
  templateUrl: './category-product-list.component.html',
  styleUrls: ['./category-product-list.component.css']
})
export class CategoryProductListComponent {
  @Input() product: Product;
  category: string;
  catproductList;
  constructor(
    private productService: ProductService,
    public router: Router, private activatedRoute: ActivatedRoute, private tokenStorageService: TokenStorage, public authenticationService: AuthenticationService) { }
  ngOnInit() {
  
   this.category = (this.activatedRoute.snapshot.params['category']);
    this.activatedRoute.params.subscribe(
      (params: Params) => {
        this.category = params['category'];
        this.productService.onGetAllProductByCategoryName(this.category).subscribe(data => {
          console.log("see hererokay: ", data)
          this.catproductList = data
        })

      });
      
      // this.productService.productUpdate.subscribe(data => {
      //   this.catproductList = data;
      // });
  
  

    // this.productService.productUpdate.subscribe(data => {
    //   this.product = data;
    // });
    //   this.productService.onGetAllProductByCategoryName("cosmetics").subscribe(data => {
    //   console.log(data)
    //   this.catproductList = data;
    // }
    // )
  }
}
