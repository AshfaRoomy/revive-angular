import { Component, Input, ViewChild } from '@angular/core';
import { RateReview } from '../models/RateReview';

@Component({
  selector: 'app-rate-item',
  templateUrl: './rate-item.component.html',
  styleUrls: ['./rate-item.component.css']
})
export class RateItemComponent {
  @Input() rateReviewElement;
  @Input() index: number;
  isFavourite: boolean = false;

  constructor() { }

  ngOnInit() {
  }
  favOrNot(){
    this.isFavourite = !this.isFavourite;
  }
  
}
