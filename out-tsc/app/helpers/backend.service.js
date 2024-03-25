// fake-auth-api.service.ts
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import * as i0 from "@angular/core";
export class FakeAuthApiService {
    createDb() {
        const users = [
            { id: 1, username: 'user1', password: 'password1' },
            { id: 2, username: 'user2', password: 'password2' },
        ];
        return { users };
    }
    authenticate(credentials) {
        // Vérifiez les informations d'identification et renvoyez un token JWT si elles sont correctes
        const user = this.createDb().users.find((u) => u.username === credentials.username &&
            u.password === credentials.password);
        if (user) {
            const token = 'votre_token_jwt'; // Générez un token JWT ici
            return of({ token });
        }
        else {
            return of(null);
        }
    }
    static { this.ɵfac = function FakeAuthApiService_Factory(t) { return new (t || FakeAuthApiService)(); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: FakeAuthApiService, factory: FakeAuthApiService.ɵfac, providedIn: 'root' }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FakeAuthApiService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], null, null); })();
//# sourceMappingURL=backend.service.js.map