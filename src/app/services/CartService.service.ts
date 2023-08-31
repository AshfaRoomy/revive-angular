import { HttpClient, HttpHeaders, HttpRequest, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { TokenStorage } from "./TokenStorage.service";
import { Cart } from "../models/Cart";

const API = 'http://localhost:8080/api/cart/';

const getHttpOptions = (token: String) => {
    return {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        })
    }
}
@Injectable()
export class CartService {
    cartListUpdate = new Subject<Cart[]>();
    cartQuantityUpdate = new Subject<number[]>();
    
    cartListCountChange = new Subject<number>();
    cartTotalUpdate = new Subject<number>();

    cartLisAmounttUpdate = new Subject<any>();


    constructor(private http: HttpClient, private tokenStorage: TokenStorage) { }


        onAddCartService(productId, cartQuantity, totalPrice): Observable<any> {
        const localHttpOptions = getHttpOptions(this.tokenStorage.getToken() as String);
        console.log(productId, cartQuantity, totalPrice);
        return this.http.post<any>(API + "add-cart/" + productId, {},
            { params: { cartQuantity, totalPrice }, ...localHttpOptions }
        );
    }

    // onGetAllCartItemByUserIdService(): Observable<any> {
    //     const localHttpOptions = getHttpOptions(this.tokenStorage.getToken() as String);
    //     return this.http.get(API + "cartAll", localHttpOptions);
    // }

    onGetAllCartItemByCustomerIdService(): Observable<any> {
        const localHttpOptions = getHttpOptions(this.tokenStorage.getToken() as String);
        console.log("Bzzz");
        return this.http.get(API + "cartAll", localHttpOptions);
    }

    onDeleteCartIdService(cartId): Observable<any> {
        const localHttpOptions = getHttpOptions(this.tokenStorage.getToken() as String);
        return this.http.delete(API + "delete/" + cartId, localHttpOptions);
    }

    onUpdateCartItem(cartId, quantity): Observable<any> {
        const localHttpOptions = getHttpOptions(this.tokenStorage.getToken() as String);
        return this.http.put<any>(API + "update-cart/" + cartId, {},
            { params: { quantity }, ...localHttpOptions });
    }
}