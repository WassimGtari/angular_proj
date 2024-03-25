import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class FollwersService extends DataService {
    constructor(http) {
        super('https://api.github.com/users/mosh-hamedani/followers', http);
    }
    static { this.ɵfac = function FollwersService_Factory(t) { return new (t || FollwersService)(i0.ɵɵinject(i1.HttpClient)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: FollwersService, factory: FollwersService.ɵfac, providedIn: 'root' }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FollwersService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: i1.HttpClient }]; }, null); })();
//# sourceMappingURL=follwers.service.js.map