import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../login/login.component";
export class HomeComponent {
    static { this.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: HomeComponent, selectors: [["app-home"]], decls: 1, vars: 0, template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelement(0, "app-login");
        } }, dependencies: [i1.LoginComponent] }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(HomeComponent, [{
        type: Component,
        args: [{ selector: 'app-home', template: "<app-login></app-login>\n" }]
    }], null, null); })();
//# sourceMappingURL=home.component.js.map