import { Component, Input } from '@angular/core';
import { Blog } from '../models/Blog';
import { BlogService } from '../services/BlogService.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-customer-blog',
  templateUrl: './customer-blog.component.html',
  styleUrls: ['./customer-blog.component.css']
})
export class CustomerBlogComponent {
  @Input() blog: Blog;
  // blogId: number;
  showFullContent = false;


  constructor() {

  }
  ngOnInit() {
    // this.blogId = +(this.activatedRoute.snapshot.params['id']);
    // this.activatedRoute.params.subscribe(
    //   (params: Params) => {
    //     this.blogId = +params['id'];
    //     this.blogService.onGetBlogById(this.blogId).subscribe((data: Blog) => {
    //       this.blog = data;
    //       console.log(data);

    //     })

    //   });

    // this.blogService.blogUpdate.subscribe(updateBlog => {
    //   this.blog = updateBlog;
    // });


  }
  toggleContent() {
    this.showFullContent = !this.showFullContent;
  }

}
