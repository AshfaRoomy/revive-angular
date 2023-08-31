import { HttpHeaders, HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { JwtHelperService } from "@auth0/angular-jwt";
import { TokenStorage } from "./TokenStorage.service";
import { FormGroup } from "@angular/forms";

const AUTH_API = 'http://localhost:8080/api/auth/';
const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
    })
};

@Injectable()
export class AuthenticationService {
    helper = new JwtHelperService();
    isRoleAdmin: boolean = false;
    isLoggedIn = false;
    roles: any;

    constructor(private http: HttpClient, private tokenStorage: TokenStorage) { }

    onLoginService(credentials: any): Observable<any> {
        return this.http.post(AUTH_API + "login", {
            email: credentials.value.email,
            password: credentials.value.password
        },
            httpOptions);
    }

    onSignUpService(newUser: FormGroup): Observable<any> {
        return this.http.post(AUTH_API + "register", {
            username: newUser.value.username,
            email: newUser.value.email,
            password: newUser.value.password
        }, httpOptions);
    }

    loggedIn() {
        const token = this.tokenStorage.getToken();
        return !this.helper.isTokenExpired(token);
    }

    isAuthenticated(): any {
        if (this.loggedIn() === true) {
            const user = this.tokenStorage.getUser();
            this.roles = user.roles;
            if (this.roles.includes("ADMIN")) {
                this.isRoleAdmin = true;
                return this.isRoleAdmin;
            }
            return;
        }
    }
    // onSignOut()
    // {

    // }

}