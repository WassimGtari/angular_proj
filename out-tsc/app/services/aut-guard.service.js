import { Injectable, inject } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./auth.service";
import * as i2 from "@angular/router";
export class AutGuardService {
    constructor(authservice, route) {
        this.authservice = authservice;
        this.route = route;
    }
    canActivate(route, state) {
        if (this.authservice.isLoggedIn())
            return true;
        this.route.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    }
    static { this.ɵfac = function AutGuardService_Factory(t) { return new (t || AutGuardService)(i0.ɵɵinject(i1.AuthService), i0.ɵɵinject(i2.Router)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: AutGuardService, factory: AutGuardService.ɵfac, providedIn: 'root' }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AutGuardService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: i1.AuthService }, { type: i2.Router }]; }, null); })();
export const IsAuthoGuard = (route, state) => {
    return inject(AutGuardService).canActivate(route, state);
};
//# sourceMappingURL=aut-guard.service.js.map