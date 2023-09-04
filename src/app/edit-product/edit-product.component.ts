import { Component, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Product } from '../models/Product';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProductService } from '../services/ProductService.service';
import { CategoryService } from '../services/CategoryService.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent {
  editProductForm: FormGroup;
  @Input() product: Product;
  categoryList;
  productId: number
  editMode;
  selectedCategory;
  category;
  categoryName!: String

  @Input() value;
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private productService: ProductService, private categoryService: CategoryService, private toastr: ToastrService) {
  }

  ngOnInit() {
    this.editMode = true;
    this.categoryService.onGetAllCategories().subscribe(data => {
      this.categoryList = data;
    });
    this.activatedRoute.params.subscribe(
      (params: Params) => {
        this.productId = +params['id'];
        this.editMode = true;

        this.initializeForm();

        this.productService.onGetProductById(this.productId).subscribe((data: Product) => {
          this.product = data;
          this.categoryName = data.category;

        });
      });
  }

  private initializeForm() {
    if (this.editMode) {
      this.productService.onGetProductById(this.productId).subscribe((data: Product) => {
        console.log(data);
        this.editProductForm.setValue({
          image: data.image,
          productName: data.productName,
          brand:data.brand,
          price: data.price,
          quantity: data.quantity,
          category: data.category,
          description: data.description
        });
      });
    }
    this.editProductForm = new FormGroup({
      'image': new FormControl(null, Validators.required),
      'productName': new FormControl(null, Validators.required),
      'brand': new FormControl(null,Validators.required),
      'price': new FormControl(null, Validators.required),
      'quantity': new FormControl(null, Validators.required),
      'category': new FormControl(null, Validators.required),
      'description': new FormControl(null, Validators.required)
    });
  }
  onClose() {
    this.router.navigate(['./'], { relativeTo: this.activatedRoute });
  }

  onUpdateProduct() {
    this.productService.onUpdateProductByProductId(this.productId, this.editProductForm).subscribe(data => {
      console.log("Product update!");
      this.toastr.success("Successsfully Updated");
      this.editProductForm.reset();
      this.onClose();
      this.productService.onGetProductById(this.productId).subscribe(data => {
        this.productService.productUpdate.next(data);
        console.log(data);
      });

    }, err => {
      this.toastr.error("Sorry Couldnt Update");
    });
  }
}
