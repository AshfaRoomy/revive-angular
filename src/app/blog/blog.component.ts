import { Component, Input } from '@angular/core';
import { Blog } from '../models/Blog';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from '../services/BlogService.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  @Input() blogElement: Blog;
  @Input() index: number;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private blogService: BlogService, private toastr: ToastrService) {
    
   }

  ngOnInit() {
    // this.blogService.blogUpdate.subscribe(updatedData => {
    //   console.log(updatedData);
    //   this.blogElement = updatedData;
    // });
  }

  onDelete(blogId) {
    this.blogService.onDeleteById(blogId).subscribe
      (data => {
        console.log(data);
        this.toastr.success(data.message);
        this.blogService.onGetAllBlogs().subscribe(data => {
          this.blogService.blogListUpdate.next(data);
        });
      },
        (err) => {
          console.log("error");
          this.toastr.error(err.error.message);
        }


      );
  }
}

