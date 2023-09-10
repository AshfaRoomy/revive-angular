import { Component, Input, ViewChild } from '@angular/core';
import { RateReview } from '../models/RateReview';

@Component({
  selector: 'app-rate-item',
  templateUrl: './rate-item.component.html',
  styleUrls: ['./rate-item.component.css']
})
export class RateItemComponent {
  @Input() rateReviewElement: RateReview;
  @Input() index: number;
  // @ViewChild(ChildComponent) childModal: ChildComponent;

  constructor() { }

  ngOnInit() {
  }
  openModal(index) {
    // const id = Math.floor(Math.random() * 50);
    // console.log("here: "+index)
    // this.childModal.open(index);
  }
}
