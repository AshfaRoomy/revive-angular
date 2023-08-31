import { HttpHeaders, HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Observable, Subject } from "rxjs";

import { TokenStorage } from "./TokenStorage.service";
import { Product } from "../models/Product";

const API = 'http://localhost:8080/api/product/';

const getHttpOptions = (token: String) => {
    return {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Authorization': `Bearer ${token}`
        })
    }
}

@Injectable()
export class ProductService {
    productListUpdate = new Subject<Product[]>();
    productUpdate = new Subject<Product>();



    constructor(private http: HttpClient,
        private tokenStorage: TokenStorage) {
    }
    onAddProduct(addProductForm): Observable<any> {
        const localHttpOptions = getHttpOptions(this.tokenStorage.getToken() as string);
        return this.http.post(API + "create", {
            productName: addProductForm.value.productName,
            brand: addProductForm.value.brand,
            image: addProductForm.value.image,
            price: addProductForm.value.price,
            quantity: addProductForm.value.quantity,
            category: addProductForm.value.category,
            description: addProductForm.value.description
        }, localHttpOptions)
    }
    onGetAllProducts(): Observable<any> {
        return this.http.get(API + "productAll");
    }
    onGetProductById(productId: number): Observable<any> {
        return this.http.get(API + "product/" + productId);
    }
    onGetAllProductByCategoryName(categoryType: string): Observable<any> {
        console.log(categoryType);
        // const localHttpOptions = getHttpOptions(this.tokenStorage.getToken() as String);
        return this.http.get(API + "category-product/" + categoryType);
    }
    onUpdateProductByProductId(productId: any, editProductForm: any): Observable<any> {
        const localHttpOptions = getHttpOptions(this.tokenStorage.getToken() as String);
        return this.http.put(API + "update-product/ " + productId, {
            image: editProductForm.value.image,
            brand: editProductForm.value.brand,
            productName: editProductForm.value.productName,
            price: editProductForm.value.price,
            quantity: editProductForm.value.quantity,
            category: editProductForm.value.category,
            description: editProductForm.value.description
        }, localHttpOptions);
    }
    onDeleteById(productId: any): Observable<any> {
        const localHttpOptions = getHttpOptions(this.tokenStorage.getToken() as String);
        console.log(productId)
        return this.http.delete(API + "delete-product/" + productId, localHttpOptions
        );
    }


}
