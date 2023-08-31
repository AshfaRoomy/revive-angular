import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

const TOKEN_KEY = "auth_token";
const USER_KEY = "auth_user";

@Injectable()
export class TokenStorage {
    constructor(private router: Router) { }

    signOut() {
        window.sessionStorage.clear();
        this.router.navigate(["/"]);
    }

    public saveToken(token: string) {
        console.log("here: " + token)
        window.sessionStorage.removeItem(TOKEN_KEY);
        window.sessionStorage.setItem(TOKEN_KEY, token);
    }

    public getToken(): string | null {
        return sessionStorage.getItem(TOKEN_KEY);

    }

    public saveUser(user: any) {
        window.sessionStorage.removeItem(USER_KEY);
        window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
    }
    public getUser() {
        return JSON.parse(sessionStorage.getItem(USER_KEY) || '{}');
    }
}