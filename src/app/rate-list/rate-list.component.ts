import { Component } from '@angular/core';
import { RateReviewService } from '../services/RateReviewService.service';
import { ProductService } from '../services/ProductService.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Product } from '../models/Product';

@Component({
  selector: 'app-rate-list',
  templateUrl: './rate-list.component.html',
  styleUrls: ['./rate-list.component.css']
})
export class RateListComponent {
  rateReviewList;
  average;
  id;
  count;
  scaledImage:String;
    constructor(private rateReviewService:RateReviewService,private productService:ProductService,private activatedRoute:ActivatedRoute,private router:Router) { }
  
    ngOnInit() {
      this.activatedRoute.params.subscribe(
        (params: Params) => {
          this.id = +params['id'];
          console.log(this.id)
        
          this.rateReviewService.onGetRateReviewByProductId(this.id).subscribe(data => {
            this.rateReviewList = data;
            console.log("Rate review list:", data);
            
            this.count = this.rateReviewList.length;
            console.log(this.rateReviewList);
            this.average = this.rateReviewService.onCalculateAverage(this.rateReviewList);
          });
        }
      );
      
      
    
    }
  
   
    
}
