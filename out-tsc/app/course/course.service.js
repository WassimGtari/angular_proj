import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class CourseService {
    constructor() {
        this.course = [
            {
                title: 'wassim',
                rating: 4.9745,
                students: 30123,
                price: 190.95,
                releaseDate: new Date(2024, 3, 1),
            },
            {
                title: 'ali12212',
                rating: 5.9445,
                students: 25602,
                price: 280.95,
                releaseDate: new Date(2024, 2, 23),
            },
            {
                title: 'med',
                rating: 4.56,
                students: 2546613,
                price: 195.95,
                releaseDate: new Date(2024, 2, 26),
            },
        ];
    }
    getCourse() {
        return this.course;
    }
    static { this.ɵfac = function CourseService_Factory(t) { return new (t || CourseService)(); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: CourseService, factory: CourseService.ɵfac }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CourseService, [{
        type: Injectable
    }], null, null); })();
//# sourceMappingURL=course.service.js.map