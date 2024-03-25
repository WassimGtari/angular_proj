// auth.service.ts
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import * as i0 from "@angular/core";
import * as i1 from "../helpers/backend.service";
import * as i2 from "@auth0/angular-jwt";
export class AuthService {
    constructor(fakeAuthApiService, jwtHelper) {
        this.fakeAuthApiService = fakeAuthApiService;
        this.jwtHelper = jwtHelper;
        this.token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Ik1vc2ggSGFtZWRhbmkiLCJhZG1pbiI6ZmFsc2V9.DLTdOwxPMgCsXA9p2WDJvwimoQvL2Q6Yyn_sm6B4KRE';
    }
    login(credentials) {
        const users = this.fakeAuthApiService.createDb().users; // Accédez à la base de données simulée
        const user = users.find((u) => u.username === credentials.username &&
            u.password === credentials.password);
        this.setToken(this.token);
        return of(user || null); // Retourne l'utilisateur trouvé ou null s'il n'existe pas
    }
    setToken(token) {
        // Stockez le token JWT dans le stockage local
        localStorage.setItem('token', token);
    }
    logout() {
        localStorage.removeItem('token');
    }
    get currentUser() {
        let token = localStorage.getItem('token');
        if (!token)
            return null;
        return new JwtHelperService().decodeToken(token);
    }
    isLoggedIn() {
        // Check if user is logged in (check JWT token)
        const token = localStorage.getItem('token');
        return token !== null && !this.jwtHelper.isTokenExpired(token);
    }
    static { this.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(i0.ɵɵinject(i1.FakeAuthApiService), i0.ɵɵinject(i2.JwtHelperService)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AuthService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: i1.FakeAuthApiService }, { type: i2.JwtHelperService }]; }, null); })();
//# sourceMappingURL=auth.service.js.map