import { HttpHeaders, HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { TokenStorage } from "./TokenStorage.service";

const API = 'http://localhost:8080/api/category/';

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

    constructor(private http: HttpClient, private tokenStorage: TokenStorage) {

    }
    onAddBlog(addBlogForm): Observable<any> {
        const localHttpOptions = getHttpOptions(this.tokenStorage.getToken() as string);
        console.log('here: ' + addBlogForm.value.categoryName)
        return this.http.post(API + "addCategory", {
            image: addBlogForm.value.image,
            blogTitle: addBlogForm.value.blogTitle,
            blogContent: addBlogForm.value.content
        }, localHttpOptions);
    }
}