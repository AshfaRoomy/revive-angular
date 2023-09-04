import { Component, Input } from '@angular/core';
import { Blog } from '../models/Blog';
import { BlogService } from '../services/BlogService.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent {
  @Input() blog: Blog;
   blogList;
 
   constructor(private blogService: BlogService) {
     
    }
 
 
   ngOnInit() {
     this.blogService.onGetAllBlogs().subscribe(data => {
       this.blogList = data;
       console.log(data);

     });
     this.blogService.blogListUpdate.subscribe(data => {
       this.blogList = data;
     });
     
 
   }
}
