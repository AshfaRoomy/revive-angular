import { Component, Input } from '@angular/core';
import { Blog } from '../models/Blog';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from '../services/BlogService.service';
import { ToastrService } from 'ngx-toastr';
import { TokenStorage } from '../services/TokenStorage.service';
import { AuthenticationService } from '../services/AuthenticationService.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  @Input() blogElement: Blog;
  @Input() index: number;

  constructor(public authenticationService:AuthenticationService,private router: Router, private activatedRoute: ActivatedRoute, private blogService: BlogService, private toastr: ToastrService) {
    
   }

  ngOnInit() {
      // this.blogService.blogUpdate.subscribe(data => {
      //     this.blogElement = data;
      //   });   
  }

  onDelete(blogId) {
    this.blogService.onDeleteById(blogId).subscribe
      (data => {
        console.log(data);
        if(data !=null || !data){
        this.toastr.success(data.message);
        this.blogService.onGetAllBlogs().subscribe(data => {
          this.blogService.blogListUpdate.next(data);
        });
      }
      else{
        this.toastr.success("Something went wrong. Please refresh the page to get the updated content.");
      }
      },
        (err) => {
          console.log("error");
          if (err && err.error && err.error.message) {
            // Check if err, err.error, and err.error.message are not null or undefined
            this.toastr.error(err.error.message);
          } else {
            // Handle the case where the error structure is unexpected
            this.toastr.error("An error occurred.");
          }
        }


      );
  }
}

