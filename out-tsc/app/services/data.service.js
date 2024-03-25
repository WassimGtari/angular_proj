import { Inject, Injectable } from '@angular/core';
import { catchError, retry } from 'rxjs/operators';
import { throwError, map, firstValueFrom } from 'rxjs';
import { AppError } from '../common/AppError';
import { NotFoundError } from '../common/not-found-error';
import { BadRequestError } from '../common/badrequiest-error';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class DataService {
    constructor(url, http) {
        this.url = url;
        this.http = http;
    }
    getAll() {
        return this.http.get(this.url).pipe(map((response) => JSON.parse(JSON.stringify(response))), catchError(this.handlererror));
    }
    create(resource) {
        // return throwError(() => new AppError());
        return this.http.post(this.url, JSON.stringify(resource)).pipe(map((response) => JSON.parse(JSON.stringify(response))), catchError(this.handlererror));
    }
    update(resource) {
        return this.http
            .patch(this.url + '/' + resource.id, JSON.stringify({ isRead: true }))
            .pipe(map((response) => JSON.parse(JSON.stringify(response))), catchError(this.handlererror));
    }
    async delete(id) {
        const url = `${this.url}/${id}`;
        console.log(url);
        return await firstValueFrom(this.http.delete(url).pipe(retry(3), catchError(this.handlererror)));
    }
    handlererror(error) {
        if (error.status === 404)
            return throwError(() => new NotFoundError());
        if (error.status === 400)
            return throwError(() => new BadRequestError(JSON.stringify(error)));
        return throwError(() => new AppError(error));
    }
    static { this.ɵfac = function DataService_Factory(t) { return new (t || DataService)(i0.ɵɵinject(String), i0.ɵɵinject(i1.HttpClient)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: DataService, factory: DataService.ɵfac, providedIn: 'root' }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DataService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [String]
            }] }, { type: i1.HttpClient }]; }, null); })();
//# sourceMappingURL=data.service.js.map