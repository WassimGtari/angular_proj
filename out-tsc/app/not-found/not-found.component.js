import { Component } from '@angular/core';
import * as i0 from "@angular/core";
export class NotFoundComponent {
    static { this.ɵfac = function NotFoundComponent_Factory(t) { return new (t || NotFoundComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: NotFoundComponent, selectors: [["app-not-found"]], decls: 6, vars: 0, template: function NotFoundComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "h1");
            i0.ɵɵtext(1, "Page Not Found");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(2, "p");
            i0.ɵɵtext(3, "Sorry, this page was not found");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "p");
            i0.ɵɵtext(5, "You will be redirected to the home page in a few seconds");
            i0.ɵɵelementEnd();
        } } }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NotFoundComponent, [{
        type: Component,
        args: [{ selector: 'app-not-found', template: "<h1>Page Not Found</h1>\n<p>Sorry, this page was not found</p>\n<p>You will be redirected to the home page in a few seconds</p>\n" }]
    }], null, null); })();
//# sourceMappingURL=not-found.component.js.map