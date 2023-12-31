import { Component, Input } from '@angular/core';
import { Blog } from '../models/Blog';
import { BlogService } from '../services/BlogService.service';
import { ActivatedRoute, Params } from '@angular/router';
import { AuthenticationService } from '../services/AuthenticationService.service';

@Component({
  selector: 'app-view-blog',
  templateUrl: './view-blog.component.html',
  styleUrls: ['./view-blog.component.css']
})
export class ViewBlogComponent {
  @Input() blog: Blog;
  blogId: number;

  constructor(private blogService: BlogService, private activatedRoute: ActivatedRoute, public authenticationService:AuthenticationService) {

  }
  ngOnInit() {
    this.blogId = +(this.activatedRoute.snapshot.params['id']);
    this.activatedRoute.params.subscribe(
      (params: Params) => {
        this.blogId = +params['id'];
        this.blogService.onGetBlogById(this.blogId).subscribe((data: Blog) => {
          this.blog = data;
          console.log(data);

        })

      });

    this.blogService.blogUpdate.subscribe(updateBlog => {
      this.blog = updateBlog;
    });


  }


}
