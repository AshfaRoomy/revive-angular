import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../services/CategoryService.service';
import { ProductService } from '../services/ProductService.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-product-dialog',
  templateUrl: './add-product-dialog.component.html',
  styleUrls: ['./add-product-dialog.component.css']
})
export class AddProductDialogComponent {
  addProductForm: FormGroup;
  categoryList;
  selectedCategory;
  productList;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private categoryService: CategoryService, private productService: ProductService, private toastr: ToastrService) { }


  ngOnInit() {
    this.initializeForm();
    this.categoryService.onGetAllCategories().subscribe(data => {
      this.categoryList = data;
    });
  }
  private initializeForm() {
    this.addProductForm = new FormGroup({
      'image': new FormControl(null, Validators.required),
      'productName': new FormControl(null, Validators.required),
      'brand': new FormControl(null, Validators.required),
      'price': new FormControl(null, Validators.required),
      'quantity': new FormControl(null, Validators.required),
      'category': new FormControl(null, Validators.required),
      'description': new FormControl(null, Validators.required)
    });
  }
  onClose() {
    this.router.navigate(['./'], { relativeTo: this.activatedRoute });

  }
  onAddProduct() {
    this.productService.onAddProduct(this.addProductForm).subscribe(data => {
      this.addProductForm.reset();
      this.toastr.success(data.message);

      this.productService.onGetAllProducts().subscribe(data => {
        this.productService.productListUpdate.next(data);
      });
    },
      err => {
        this.toastr.error("Couldn't Add the Product")
      });
  }
}
