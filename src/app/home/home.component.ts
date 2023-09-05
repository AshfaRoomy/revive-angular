import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/ProductService.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  feature1: String;
  feature2: String;
  feature3: String;
  feature4: String;
  feature5: String;
catproductList;

  constructor(private productService: ProductService) {
    this.feature1 = 'assets/images/features/f1.png';
    this.feature2 = 'assets/images/features/f2.png';
    this.feature3 = 'assets/images/features/f3.png';
    this.feature4 = 'assets/images/features/f4.png';
    this.feature5 = 'assets/images/features/f5.png';

  }



  ngOnInit() {
    this.productService.onGetAllProductByCategoryName("cosmetics").subscribe(data => {
      this.catproductList = data;
      console.log(data);

    })

  }
}
