import { Component, Input } from '@angular/core';
import { Blog } from '../models/Blog';
import { BlogService } from '../services/BlogService.service';

@Component({
  selector: 'app-customer-blog-list',
  templateUrl: './customer-blog-list.component.html',
  styleUrls: ['./customer-blog-list.component.css']
})
export class CustomerBlogListComponent {
  @Input() blog: Blog;
  blogList: Blog[] =[];
 
   constructor(private blogService: BlogService) {
    }
 
 
   ngOnInit() {
     this.blogService.onGetAllBlogs().subscribe(data => {
       this.blogList = data;
       console.log("blog list: ", data);
      
     });
     this.blogService.blogListUpdate.subscribe(updateData => {
      this.blogList = updateData;
    });
    
    this.blogService.blogUpdate.subscribe((data: Blog) => {
      // Find the index of the updated blog in blogList
      const index = this.blogList.findIndex(blog => blog.blogId === data.blogId);

      if (index !== -1) {
        // Update the blog in blogList
        this.blogList[index] = data;
      }
    });
 
   }
}
