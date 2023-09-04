import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from '../services/CategoryService.service';


@Component({
  selector: 'app-add-category-dialog',
  templateUrl: './add-category-dialog.component.html',
  styleUrls: ['./add-category-dialog.component.css']
})
export class AddCategoryDialogComponent {
  // addCategoryForm: FormGroup;


  // constructor(private router: Router, private activatedRoute: ActivatedRoute,
  //   private categoryService: CategoryService, private toast: ToastrService) { }

  // private initializeForm() {
  //   this.addCategoryForm = new FormGroup({
  //     'categoryName': new FormControl(null, Validators.required),
  //   });
  // }

  // ngOnInit() {
  //   this.initializeForm();
  // }

  // onClose() {
  //   this.router.navigate(['./'], { relativeTo: this.activatedRoute });

  // }
  // onAddCategory() {
  //   this.categoryService.onAddCategory(this.addCategoryForm).subscribe(data => {
  //     this.addCategoryForm.reset();
  //     this.toast.success(data.message);
  //   },
  //     err => {
  //       this.toast.error("Couldnt Create the category samavenna")
  //     });
  // }
}
