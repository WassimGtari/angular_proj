import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class PostService extends DataService {
    constructor(http) {
        super('https://jsonplaceholder.typicode.com/posts', http);
    }
    static { this.ɵfac = function PostService_Factory(t) { return new (t || PostService)(i0.ɵɵinject(i1.HttpClient)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: PostService, factory: PostService.ɵfac, providedIn: 'root' }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PostService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: i1.HttpClient }]; }, null); })();
//# sourceMappingURL=post.service.js.map