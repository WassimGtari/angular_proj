import { environment } from './../../environments/environment';
import { Component, EventEmitter, Input, Output, ViewEncapsulation, } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = function (a0, a1) { return { "bi-star-fill": a0, "bi-star": a1 }; };
export class FavoriteComponent {
    constructor() {
        this.color = environment.navbarcolor;
        this.change = new EventEmitter();
    }
    Onclick() {
        this.isselected = !this.isselected;
        this.change.emit({ newvalue: this.isselected });
    }
    static { this.ɵfac = function FavoriteComponent_Factory(t) { return new (t || FavoriteComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FavoriteComponent, selectors: [["app-favorite"]], inputs: { isselected: ["isfavrite", "isselected"] }, outputs: { change: "change" }, decls: 3, vars: 6, consts: [[1, "bi", 3, "ngClass", "click"]], template: function FavoriteComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "h1");
            i0.ɵɵtext(1, "favorite works!");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(2, "span", 0);
            i0.ɵɵlistener("click", function FavoriteComponent_Template_span_click_2_listener() { return ctx.Onclick(); });
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵstyleProp("color", ctx.color);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(3, _c0, ctx.isselected, !ctx.isselected));
        } }, dependencies: [i1.NgClass], styles: ["h1[_ngcontent-%COMP%]{\r\n  color: red;\r\n}"] }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FavoriteComponent, [{
        type: Component,
        args: [{ selector: 'app-favorite', encapsulation: ViewEncapsulation.Emulated, template: "<h1 [style.color]=\"color\">favorite works!</h1>\n\n<span\n  class=\"bi\"\n\n  [ngClass]=\"{ 'bi-star-fill': isselected, 'bi-star': !isselected }\"\n  (click)=\"Onclick()\"\n></span>\n", styles: ["\r\n\r\n\r\nh1{\r\n  color: red;\r\n}\r\n"] }]
    }], null, { isselected: [{
            type: Input,
            args: ['isfavrite']
        }], change: [{
            type: Output
        }] }); })();
//# sourceMappingURL=favorite.component.js.map