import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Blog } from '../models/Blog';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { BlogService } from '../services/BlogService.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-blog',
  templateUrl: './edit-blog.component.html',
  styleUrls: ['./edit-blog.component.css']
})
export class EditBlogComponent {
  editBlogForm: FormGroup;
  @Input() blog: Blog;
  blogList;
  blogId: number;
  editMode;

  @Input() value;
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private blogService: BlogService,  private toastr: ToastrService) {
  }

  ngOnInit() {
    this.editMode = true;
    // this.categoryService.onGetAllCategories().subscribe(data => {
    //   this.categoryList = data;
    // });
    console.log("editform");
    this.activatedRoute.params.subscribe(
      (params: Params) => {
        this.blogId = +params['id'];
        this.editMode = true;

        this.initializeForm();

        this.blogService.onGetBlogById(this.blogId).subscribe((data: Blog) => {
          this.blog = data;

        });
      });
  }

  private initializeForm() {
    if (this.editMode) {
      this.blogService.onGetBlogById(this.blogId).subscribe((data: Blog) => {
        console.log(data);
        this.editBlogForm.setValue({
          image: data.image,
          blogTitle: data.blogTitle,
          blogContent: data.blogContent
        });
      });
    }
    this.editBlogForm = new FormGroup({
      'image': new FormControl(null, Validators.required),
      'blogTitle': new FormControl(null, Validators.required),
      'blogContent': new FormControl(null,Validators.required)
    });
  }
  onClose() {
    this.router.navigate(['./'], { relativeTo: this.activatedRoute });
  }

  onUpdateBlog() {
    this.blogService.onUpdateBlogByBlogId(this.blogId, this.editBlogForm).subscribe(data => {
      console.log("Blog update!");
      this.toastr.success("Successsfully Updated");
      this.editBlogForm.reset();
      this.onClose();
      this.blogService.onGetBlogById(this.blogId).subscribe(data => {
        this.blogService.blogUpdate.next(data);
         console.log(data);
      });

    }, err => {
      this.toastr.error("Sorry Couldnt Update");
    });
  }
}
