import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./course.service";
import * as i2 from "@angular/common";
import * as i3 from "./summary.pipe";
function CourseComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div");
} }
function CourseComponent_li_6_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "summary");
    i0.ɵɵpipe(3, "number");
    i0.ɵɵpipe(4, "currency");
    i0.ɵɵpipe(5, "number");
    i0.ɵɵpipe(6, "date");
    i0.ɵɵelementStart(7, "button", 0);
    i0.ɵɵlistener("click", function CourseComponent_li_6_Template_button_click_7_listener() { const restoredCtx = i0.ɵɵrestoreView(_r9); const course_r7 = restoredCtx.$implicit; const ctx_r8 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r8.remove(course_r7)); });
    i0.ɵɵtext(8, "Remove");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const course_r7 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate5(" - ", i0.ɵɵpipeBind1(2, 5, course_r7.title), "| ", i0.ɵɵpipeBind1(3, 7, course_r7.students), " | ", i0.ɵɵpipeBind2(4, 9, course_r7.price, "EUR"), " | Rating: ", i0.ɵɵpipeBind2(5, 12, course_r7.rating, "2.1-1"), " | ", i0.ɵɵpipeBind2(6, 15, course_r7.releaseDate, "medium"), " ");
} }
function CourseComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 10);
    i0.ɵɵtext(1, "No Courses Yet");
    i0.ɵɵelementEnd();
} }
function CourseComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, "Map view content");
    i0.ɵɵelementEnd();
} }
function CourseComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, "List view content");
    i0.ɵɵelementEnd();
} }
function CourseComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, "Somthingelse");
    i0.ɵɵelementEnd();
} }
export class CourseComponent {
    constructor(courseservice) {
        this.courseservice = courseservice;
        this.courses = [];
        this.test_value = 'same';
    }
    ngOnInit() {
        setTimeout(() => {
            this.courses = this.courseservice.getCourse();
        }, 2000);
    }
    trackCourse(index, course) {
        return course ? course.title : undefined;
    }
    loadcourses() {
        this.courses = [
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
                rating: 9.9445,
                students: 24587,
                price: 195.95,
                releaseDate: new Date(2024, 2, 26),
            },
            {
                title: 'womkl',
                rating: 1.9445,
                students: 245287,
                price: 175.95,
                releaseDate: new Date(2014, 2, 26),
            },
        ];
    }
    AddCourse() {
        this.courses.push({
            title: 'ahmed',
            rating: 2.9445,
            students: 2421,
            price: 280.95,
            releaseDate: new Date(2024, 2, 27),
        });
    }
    remove(course) {
        let index = this.courses.indexOf(course);
        this.courses.splice(index, 1);
        //course.title = 'updated';
    }
    static { this.ɵfac = function CourseComponent_Factory(t) { return new (t || CourseComponent)(i0.ɵɵdirectiveInject(i1.CourseService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CourseComponent, selectors: [["app-course"]], decls: 20, vars: 11, consts: [[3, "click"], [4, "ngIf", "ngIfElse"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["noCourses", ""], [1, "nav", "nav-pills"], [1, "nav-item"], [1, "nav-link", 3, "click"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], ["role", "alert", 1, "alert", "alert-danger"]], template: function CourseComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "button", 0);
            i0.ɵɵlistener("click", function CourseComponent_Template_button_click_0_listener() { return ctx.loadcourses(); });
            i0.ɵɵtext(1, "Load");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(2, "button", 0);
            i0.ɵɵlistener("click", function CourseComponent_Template_button_click_2_listener() { return ctx.AddCourse(); });
            i0.ɵɵtext(3, "Add");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(4, CourseComponent_div_4_Template, 1, 0, "div", 1);
            i0.ɵɵelementStart(5, "ul");
            i0.ɵɵtemplate(6, CourseComponent_li_6_Template, 9, 18, "li", 2);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(7, CourseComponent_ng_template_7_Template, 2, 0, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵelementStart(9, "ul", 4)(10, "li", 5)(11, "a", 6);
            i0.ɵɵlistener("click", function CourseComponent_Template_a_click_11_listener() { return ctx.test_value = "map"; });
            i0.ɵɵtext(12, "Map View");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(13, "li", 5)(14, "a", 6);
            i0.ɵɵlistener("click", function CourseComponent_Template_a_click_14_listener() { return ctx.test_value = "list"; });
            i0.ɵɵtext(15, " List View");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(16, "div", 7);
            i0.ɵɵtemplate(17, CourseComponent_div_17_Template, 2, 0, "div", 8);
            i0.ɵɵtemplate(18, CourseComponent_div_18_Template, 2, 0, "div", 8);
            i0.ɵɵtemplate(19, CourseComponent_div_19_Template, 2, 0, "div", 9);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            const _r2 = i0.ɵɵreference(8);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngIf", ctx.courses.length > 0)("ngIfElse", _r2);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx.courses)("ngForTrackBy", ctx.trackCourse);
            i0.ɵɵadvance(5);
            i0.ɵɵclassProp("active", ctx.test_value == "map");
            i0.ɵɵadvance(3);
            i0.ɵɵclassProp("active", ctx.test_value == "list");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngSwitch", ctx.test_value);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngSwitchCase", "map");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngSwitchCase", "list");
        } }, dependencies: [i2.NgForOf, i2.NgIf, i2.NgSwitch, i2.NgSwitchCase, i2.NgSwitchDefault, i2.DecimalPipe, i2.CurrencyPipe, i2.DatePipe, i3.SummaryPipe] }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CourseComponent, [{
        type: Component,
        args: [{ selector: 'app-course', template: "<button (click)=\"loadcourses()\" >Load</button>\n <button (click)=\"AddCourse()\" >Add</button>\n<div *ngIf=\"courses.length > 0; else noCourses\"></div>\n\n<ul>\n  <li *ngFor=\"let course of this.courses ;trackBy:trackCourse\">\n    - {{ course.title | summary }}| {{ course.students | number }} |\n    {{ course.price | currency : \"EUR\"  }} | Rating:\n    {{ course.rating | number : \"2.1-1\" }} |\n    {{ course.releaseDate | date : \"medium\" }}\n\n<button (click)=\"remove(course)\">Remove</button>\n  </li>\n</ul>\n<ng-template #noCourses>\n  <div class=\"alert alert-danger\" role=\"alert\">No Courses Yet</div>\n</ng-template>\n\n\n<ul class=\"nav nav-pills\">\n  <li class=\"nav-item\">\n    <a\n      class=\"nav-link\"\n      [class.active]=\"this.test_value == 'map'\"\n      (click)=\"this.test_value = 'map'\"\n      >Map View</a\n    >\n  </li>\n  <li class=\"nav-item\">\n    <a\n      (click)=\"this.test_value = 'list'\"\n      class=\"nav-link\"\n      [class.active]=\"this.test_value == 'list'\"\n    >\n      List View</a\n    >\n  </li>\n</ul>\n<div [ngSwitch]=\"this.test_value\">\n  <div *ngSwitchCase=\"'map'\">Map view content</div>\n  <div *ngSwitchCase=\"'list'\">List view content</div>\n  <div *ngSwitchDefault>Somthingelse</div>\n</div>\n" }]
    }], function () { return [{ type: i1.CourseService }]; }, null); })();
//# sourceMappingURL=course.component.js.map