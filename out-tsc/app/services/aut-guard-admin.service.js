import { Injectable, inject } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./auth.service";
import * as i2 from "@angular/router";
export class AutGuardAdminService {
    constructor(authservice, route) {
        this.authservice = authservice;
        this.route = route;
    }
    canActivate(route, state) {
        let user = this.authservice.currentUser;
        if (user && user.admin)
            return true;
        this.route.navigate(['/noaccess']);
        return false;
    }
    static { this.ɵfac = function AutGuardAdminService_Factory(t) { return new (t || AutGuardAdminService)(i0.ɵɵinject(i1.AuthService), i0.ɵɵinject(i2.Router)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: AutGuardAdminService, factory: AutGuardAdminService.ɵfac, providedIn: 'root' }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AutGuardAdminService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: i1.AuthService }, { type: i2.Router }]; }, null); })();
export const IsGuardAdmin = (route, state) => {
    return inject(AutGuardAdminService).canActivate(route, state);
};
//# sourceMappingURL=aut-guard-admin.service.js.map