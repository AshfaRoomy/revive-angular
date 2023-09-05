import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { TokenStorage } from "./TokenStorage.service";
import { Orders } from "../models/Orders";

const API = 'http://localhost:8080/api/orders';

const getHttpOptions = (token: String) => {
    return {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        })
    }
}

@Injectable()
export class OrderService {
    updatePendingOrderList = new Subject<Orders[]>();
    customer;
    constructor(private http: HttpClient,
        private tokenStorage: TokenStorage) {
    }
    onAddOrdersService(formData, date, total) {
        const localHttpOptions = getHttpOptions(this.tokenStorage.getToken() as String);
        console.log("check the user: ",formData)
        return this.http.post(API + '/order/add-order',
            {
                phone: formData.value.phone,
                address: formData.value.address,
                date: date,
                total: total
            }, localHttpOptions);
    }
    onAddCartOrdersService(cartOrders): Observable<any> {
        const localHttpOptions = getHttpOptions(this.tokenStorage.getToken() as String);
        console.log("at the point: ", cartOrders)
        return this.http.post(API + '/cart/add-order',
            {
                cart: cartOrders.cart,
                orders: cartOrders.orders   

            }, localHttpOptions);
    }
    // onGetAllPendingOrdersByStatus(status): Observable<any> {
    //     const localHttpOptions = getHttpOptions(this.tokenStorage.getToken() as String);
    //     return this.http.get(API + 'all/' + status, localHttpOptions);
    // }

    onGetAllCartOrders(): Observable<any> {
        return this.http.get(API + "/all-cartOrders");
    }


    onGetAllCartByOrderId(id): Observable<any> {
        const localHttpOptions = getHttpOptions(this.tokenStorage.getToken() as String);
        return this.http.get(API + '/cart/' + id, localHttpOptions)
    }
    onGetAOrderById(id): Observable<any> {
        const localHttpOptions = getHttpOptions(this.tokenStorage.getToken() as String);
        return this.http.get(API + '/order/' + id, localHttpOptions)
    }
    // onUpdateOrderStatusByOrderId(status, id): Observable<any> {
    //     const localHttpOptions = getHttpOptions(this.tokenStorage.getToken() as String);
    //     return this.http.put(API + 'order-status/' + id + "/" + status, localHttpOptions)
    // }
    // onGetAllUserOrdersByStatus(orderStatus): Observable<any> {
    //     const localHttpOptions = getHttpOptions(this.tokenStorage.getToken() as String);
    //     this.customer = this.tokenStorage.getUser();
    //     return this.http.get(API + 'status/' + orderStatus + '/user/' + this.customer.id, localHttpOptions)
    // }
    onGetAllCartOrdersByUserId(): Observable<any> {
        const localHttpOptions = getHttpOptions(this.tokenStorage.getToken() as String);
        this.customer = this.tokenStorage.getUser();
        return this.http.get(API + '/cart-orders/' + this.customer.id, localHttpOptions)
    }
}   