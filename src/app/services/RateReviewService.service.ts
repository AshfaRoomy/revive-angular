import { HttpHeaders, HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { TokenStorage } from "./TokenStorage.service";
import { Observable, Subject } from "rxjs";
import { Product } from "../models/Product"; 

const API = 'http://localhost:8080/api/rate/';


const getHttpOptions = (token: String) => {
    return {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        })
    }
}

@Injectable()
export class RateReviewService {
    totalRate;
    average;
    constructor(private http: HttpClient,
        private tokenStorage: TokenStorage) {
    }
    onAddRateReview(productId, rateFrom): Observable<any> {
        const localHttpOptions = getHttpOptions(this.tokenStorage.getToken()as String);
        return this.http.post(API + "product-rate/" + productId, {
            rate: rateFrom.value.rate,
            feedback: rateFrom.value.feedback
        }, localHttpOptions)
    }
    onGetRateReviewByProductId(id): Observable<any> {
        const localHttpOptions = getHttpOptions(this.tokenStorage.getToken()as String);
        return this.http.get(API + "product-all/" + id, localHttpOptions);
    }
    onCalculateAverage(rateReviewList) {
        this.totalRate = 0.0;
        this.average = 0.0;
        for (let rateReview of rateReviewList) {
            this.totalRate += rateReview.rate;
            this.average = this.totalRate / rateReviewList.length;
        }
        return this.average;
    }
    onGetRateReview(id): Observable<any> {
        const localHttpOptions = getHttpOptions(this.tokenStorage.getToken()as String);
        return this.http.get(API + "product/rate/" + id, localHttpOptions);

    }
}