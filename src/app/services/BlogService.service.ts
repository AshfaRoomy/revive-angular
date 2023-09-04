import { HttpHeaders, HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { TokenStorage } from "./TokenStorage.service";
import { Blog } from "../models/Blog";

const API = 'http://localhost:8080/api/blog/';

const getHttpOptions = (token: String) => {
    return {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        })

    }
}

@Injectable()
export class BlogService {
   blogListUpdate = new Subject<Blog[]>();
   blogUpdate = new Subject<Blog>();



    constructor(private http: HttpClient, private tokenStorage: TokenStorage) {

    }
    onAddBlog(addBlogForm): Observable<any> {
        const localHttpOptions = getHttpOptions(this.tokenStorage.getToken() as string);
        console.log('here: ' + addBlogForm.value.blogTitle);
        return this.http.post(API + "addBlog", {
            image: addBlogForm.value.image,
            blogTitle: addBlogForm.value.blogTitle,
            blogContent: addBlogForm.value.content
        }, localHttpOptions);
    }

    onGetAllBlogs(): Observable<any> {
        return this.http.get(API + "all");
    }
    onGetBlogById(blogId: number): Observable<any> {
        return this.http.get(API + "blog/" + blogId);
    }

    onDeleteById(blogId: any): Observable<any> {
        const localHttpOptions = getHttpOptions(this.tokenStorage.getToken() as String);
        console.log(blogId)
        return this.http.delete(API + "deleteBlog/" + blogId, localHttpOptions
        );
    }

    onUpdateBlogByBlogId(blogId: any, editBlogForm: any): Observable<any> {
        const localHttpOptions = getHttpOptions(this.tokenStorage.getToken() as String);
        return this.http.put(API + "update-blog/ " + blogId, {
            image: editBlogForm.value.image,
            blogTitle: editBlogForm.value.blogTitle,
            blogContent: editBlogForm.value.blogContent
        }, localHttpOptions);
    }
}