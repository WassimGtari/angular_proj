import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
export class ProfilComponent {
    submit() {
        this.router.navigate(['/followers'], {
            queryParams: { page: 1, order: 'test' },
        });
    }
    constructor(route, router) {
        this.route = route;
        this.router = router;
    }
    ngOnInit() {
        this.route.paramMap.subscribe((params) => {
            let id = +params.get('id');
            let user = params.get('username');
            console.log(id);
        });
    }
    static { this.ɵfac = function ProfilComponent_Factory(t) { return new (t || ProfilComponent)(i0.ɵɵdirectiveInject(i1.ActivatedRoute), i0.ɵɵdirectiveInject(i1.Router)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ProfilComponent, selectors: [["app-profil"]], decls: 4, vars: 0, consts: [[1, "btn", "btn-primary", 3, "click"]], template: function ProfilComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "p");
            i0.ɵɵtext(1, "profil works!");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(2, "button", 0);
            i0.ɵɵlistener("click", function ProfilComponent_Template_button_click_2_listener() { return ctx.submit(); });
            i0.ɵɵtext(3, "next");
            i0.ɵɵelementEnd();
        } } }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProfilComponent, [{
        type: Component,
        args: [{ selector: 'app-profil', template: "<p>profil works!</p>\n\n<button  class=\"btn btn-primary\" (click)=\"submit()\">next</button>\n" }]
    }], function () { return [{ type: i1.ActivatedRoute }, { type: i1.Router }]; }, null); })();
//# sourceMappingURL=profil.component.js.map