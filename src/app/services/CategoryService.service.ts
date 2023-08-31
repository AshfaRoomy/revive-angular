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
export class CategoryService {

    constructor(private http: HttpClient, private tokenStorage: TokenStorage) {

    }
    onAddCategory(addCategoryForm): Observable<any> {
        const localHttpOptions = getHttpOptions(this.tokenStorage.getToken() as string);
        console.log('here: ' + addCategoryForm.value.categoryName)
        return this.http.post(API + "addCategory", {
            categoryName: addCategoryForm.value.categoryName
        }, localHttpOptions);
    }
    // onAddCategory(categoryForm): Observable<any> {
    //     const localHttpOptions = getHttpOptions(this.tokenStorage.getToken() as string);
    //     return this.http.post(API + "addCategory", {
    //         categoryName: categoryForm.value.categoryName,
    //         imageUrl: categoryForm.value.imageUrl
    //     }, localHttpOptions);
    // }

    onGetAllCategories() {
        const localHttpOptions = getHttpOptions(this.tokenStorage.getToken() as string);
        console.log('start: ', localHttpOptions);
        return this.http.get(API + "all", localHttpOptions);
    }
    // get all sub categories by giving the main category name (men/ women)
    onGetAllCategoriesByName(categoryType: string) {
        // const localHttpOptions = getHttpOptions(this.tokenStorage.getToken() as string);
        return this.http.get(API + "category-product/" + categoryType);
    }
    onGetCategoryById(categoryId: any) {
        const localHttpOptions = getHttpOptions(this.tokenStorage.getToken() as string);
        return this.http.get(API + "category/" + categoryId, localHttpOptions);
    }
}