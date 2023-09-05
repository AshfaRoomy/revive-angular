import { HttpClient, HttpHeaders, HttpRequest, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { TokenStorage } from "./TokenStorage.service";

const API = 'http://localhost:8080/api/wishlist/';

const getHttpOptions = (token: String) => {
    return {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        })
    }
}
@Injectable()
export class WishlistService {
    wishListFavouriteChange = new Subject<boolean>();
    wishListListChange = new Subject<number>();
    // wishListListCountChange = new Subject<number>();


    constructor(private http: HttpClient, private tokenStorage: TokenStorage) {

    }
    onAddRemoveWishlistService(productId) {
        const localHttpOptions = getHttpOptions(this.tokenStorage.getToken() as string);
        return this.http.post(API + "add-wishlist/" + productId, {}, localHttpOptions)

    }
   
    getAWishlistProductService(productId): Observable<any> {
        const localHttpOptions = getHttpOptions(this.tokenStorage.getToken() as string);
        return this.http.get<any>(API + "product/" + productId, localHttpOptions);
    }
    onGetAllWishlistByUserIdService(): Observable<any> {
        const localHttpOptions = getHttpOptions(this.tokenStorage.getToken() as string);
        return this.http.get(API + "wishlist-All/", localHttpOptions)
    }
}