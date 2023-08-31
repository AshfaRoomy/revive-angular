import { Component, Input } from '@angular/core';
import { Product } from '../../models/Product';
import { AuthenticationService } from 'src/app/services/AuthenticationService.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/services/CartService.service';

@Component({
  selector: 'app-category-product-item',
  templateUrl: './category-product-item.component.html',
  styleUrls: ['./category-product-item.component.css']
})
export class CategoryProductItemComponent {
  @Input() productElement: Product;

  constructor(
    private authService: AuthenticationService,
    private toastr: ToastrService,
    // private wishlistService: Wish,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private cartService: CartService
  ) { }

  quickView(productId) {
    this.router.navigate(["/detail/" + productId], { relativeTo: this.activatedRoute })
  }
  onAddToCart(productId,price){
    const totalAmount =  1 * price;
    this.cartService.onAddCartService(productId, 1, totalAmount).subscribe(data => {
      console.log(data);
      // this.cartService.cartListCountChange.next();
      this.toastr.success(data.message);
    });
  }
}
