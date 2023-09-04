import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BlogService } from '../services/BlogService.service';


@Component({
  selector: 'app-add-blog-dialog',
  templateUrl: './add-blog-dialog.component.html',
  styleUrls: ['./add-blog-dialog.component.css']
})
export class AddBlogDialogComponent {
  addBlogForm: FormGroup;


  constructor(private router: Router, private activatedRoute: ActivatedRoute,
    private blogService: BlogService, private toast: ToastrService) { }

  private initializeForm() {
    this.addBlogForm = new FormGroup({
      'image': new FormControl(null, Validators.required),
      'blogTitle': new FormControl(null, Validators.required),
      'content': new FormControl(null, Validators.required)
    });
  }

  ngOnInit() {
    this.initializeForm();
  }

  onClose() {
    this.router.navigate(['./'], { relativeTo: this.activatedRoute });

  }
  onAddBlog() {
    this.blogService.onAddBlog(this.addBlogForm).subscribe(data => {
      this.addBlogForm.reset();
      console.log(this.addBlogForm);
      this.toast.success(data.message);
      // this.blogService.onGetAllBlog().subscribe(data => {
      //   this.blogService.blogListUpdate.next(data);
      // });
    },
      err => {
        this.toast.error("Couldnt add the new blog content samavenna")
      });
  }
}
