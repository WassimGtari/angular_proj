import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../input-format.directive";
const _c0 = [[["", 8, "heading"]], [["", 8, "body"]]];
const _c1 = [".heading", ".body"];
export class PanelComponent {
    static { this.ɵfac = function PanelComponent_Factory(t) { return new (t || PanelComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PanelComponent, selectors: [["app-panel"]], ngContentSelectors: _c1, decls: 5, vars: 0, consts: [["appInputFormat", "", 1, "card", "border-primary", "mb-3", 2, "max-width", "18rem"], [1, "card-header"], [1, "card-body", "text-primary"]], template: function PanelComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef(_c0);
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1);
            i0.ɵɵprojection(2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "div", 2);
            i0.ɵɵprojection(4, 1);
            i0.ɵɵelementEnd()();
        } }, dependencies: [i1.InputFormatDirective] }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PanelComponent, [{
        type: Component,
        args: [{ selector: 'app-panel', template: "<div class=\"card border-primary mb-3\" style=\"max-width: 18rem;\" appInputFormat>\n  <div class=\"card-header\">\n    <ng-content select=\".heading\"></ng-content>\n  </div>\n  <div class=\"card-body text-primary\">\n    <ng-content select=\".body\"></ng-content>\n  </div>\n</div>\n" }]
    }], null, null); })();
//# sourceMappingURL=panel.component.js.map