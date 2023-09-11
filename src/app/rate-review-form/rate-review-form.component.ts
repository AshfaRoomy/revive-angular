import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { RateReviewService } from '../services/RateReviewService.service';
import { Product } from '../models/Product';

@Component({
  selector: 'app-rate-review-form',
  templateUrl: './rate-review-form.component.html',
  styleUrls: ['./rate-review-form.component.css']
})
export class RateReviewFormComponent implements OnInit {
  @Input() productId;
  rateReviewForm:FormGroup;
  rate: number=0;
  @ViewChild('ratingBar') ratingBar: any; // Reference to the ng-rating-bar element

    constructor(private toastr:ToastrService, private rateReviewService:RateReviewService, private fb: FormBuilder) {
      this.initForm();
     }
  
    ngOnInit() {
    }
  
    initForm()
    {
        this.rateReviewForm = this.fb.group({
          'rate': new FormControl<number | null>(null, Validators.required),
          'feedback': new FormControl(null,Validators.required)
        });
    }
    get rateControl(): FormControl<number | null> {
      return this.rateReviewForm.get('rate') as FormControl<number | null>;
    }

    onSubmitRate()
    {

        this.rateReviewService.onAddRateReview(this.productId, this.rateReviewForm).subscribe(data=>
          {
            this.toastr.success(data.message);

            this.rateReviewForm.reset();
            
            // console.log("teh subscribe data: ",       this.rateReviewForm.get('rate')?.setValue(0));

          }, error=>{
            this.toastr.error(error.error.message)
          })
      // this.rateReviewService.onAddRateReview(this.productId,this.rateReviewForm).subscribe(data=>
      //   {
      //     this.rateReviewForm = data;
      //     console.log("Rate Review data:", data);
      //     // this.rate = data.rate;
      //     this.toastr.success(data.message);
      //     // console.log("Rate:", data.rate);
      //     this.rateReviewForm.reset();
      //     data.rate=0;


      //   },err=>
      //   {
      //     this.toastr.error(err.error.message);
      //   })
    }
  }