import { Component, Input } from '@angular/core';
import { Blog } from '../models/Blog';
import { BlogService } from '../services/BlogService.service';

@Component({
  selector: 'app-blogs-page',
  templateUrl: './blogs-page.component.html',
  styleUrls: ['./blogs-page.component.css']
})
export class BlogsPageComponent {
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
