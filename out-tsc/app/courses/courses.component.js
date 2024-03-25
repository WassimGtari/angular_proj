import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../course/course.component";
export class CoursesComponent {
    static { this.ɵfac = function CoursesComponent_Factory(t) { return new (t || CoursesComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CoursesComponent, selectors: [["app-courses"]], decls: 3, vars: 0, template: function CoursesComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "h1");
            i0.ɵɵtext(1, "List of Courses");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(2, "app-course");
        } }, dependencies: [i1.CourseComponent] }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CoursesComponent, [{
        type: Component,
        args: [{ selector: 'app-courses', template: "<h1>List of Courses</h1>\n\n<app-course></app-course>\n" }]
    }], null, null); })();
//# sourceMappingURL=courses.component.js.map