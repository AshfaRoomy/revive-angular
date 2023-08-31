import { HttpHeaders, HttpClient, HttpRequest, HttpParams } from "@angular/common/http";

import { Observable, Subject } from "rxjs";
import { Injectable } from "@angular/core";
import { TokenStorage } from "./TokenStorage.service";

const API = 'http://localhost:8080/api/customer/';


const getHttpOptions = (token: String) => {
    return {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        })
    }
}
@Injectable()
export class CustomerService {
    constructor(private http: HttpClient,
        private tokenStorage: TokenStorage) {
    }
    // Should be created in backend
    onGetAUserService(): Observable<any> {
        const localHttpOptions = getHttpOptions(this.tokenStorage.getToken() as String);
        const user = this.tokenStorage.getUser();
        return this.http.get(API + "customer/" + user.id, localHttpOptions);
    }

}