import { Component } from '@angular/core';
import { switchMap } from 'rxjs';
import { combineLatest } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "../services/follwers.service";
import * as i3 from "../services/auth.service";
import * as i4 from "@angular/common";
function FollowersComponent_p_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r0.authService.currentUser.name);
} }
const _c0 = function (a1, a2) { return ["/followers", a1, a2]; };
function FollowersComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2)(1, "div", 3)(2, "a", 4);
    i0.ɵɵelement(3, "img", 5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 6)(5, "h4", 7)(6, "a", 8);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "a", 9);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const follower_r2 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵpropertyInterpolate("src", follower_r2.avatar_url, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction2(4, _c0, follower_r2.id, follower_r2.login));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(follower_r2.login);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(follower_r2.html_url);
} }
export class FollowersComponent {
    constructor(route, service, authService) {
        this.route = route;
        this.service = service;
        this.authService = authService;
    }
    ngOnInit() {
        combineLatest([this.route.paramMap, this.route.queryParamMap])
            .pipe(switchMap((combined) => {
            let id = combined[0].get('id');
            let page = combined[1].get('page');
            return this.service.getAll();
        }))
            .subscribe((followers) => (this.followers = followers));
    }
    static { this.ɵfac = function FollowersComponent_Factory(t) { return new (t || FollowersComponent)(i0.ɵɵdirectiveInject(i1.ActivatedRoute), i0.ɵɵdirectiveInject(i2.FollwersService), i0.ɵɵdirectiveInject(i3.AuthService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FollowersComponent, selectors: [["app-followers"]], decls: 2, vars: 2, consts: [[4, "ngIf"], ["class", "media", 4, "ngFor", "ngForOf"], [1, "media"], [1, "media-left"], ["href", "#"], ["alt", "...", 1, "avatar", "media-object", 3, "src"], [1, "media-body"], [1, "media-heading"], [3, "routerLink"], ["href", "follower.html_url"]], template: function FollowersComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, FollowersComponent_p_0_Template, 2, 1, "p", 0);
            i0.ɵɵtemplate(1, FollowersComponent_div_1_Template, 10, 7, "div", 1);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.authService.isLoggedIn());
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx.followers);
        } }, dependencies: [i4.NgForOf, i4.NgIf, i1.RouterLink], styles: [".avatar[_ngcontent-%COMP%] {\r\n  width: 80px;\r\n  height: 80px;\r\n  border-radius: 100%;\r\n}"] }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FollowersComponent, [{
        type: Component,
        args: [{ selector: 'app-followers', template: "<p *ngIf=\"authService.isLoggedIn()\">{{authService.currentUser.name}}</p>\n<div *ngFor=\"let follower of followers\" class=\"media\">\n  <div class=\"media-left\">\n    <a href=\"#\">\n      <img class=\"avatar media-object\" src=\"{{ follower.avatar_url }}\" alt=\"...\">\n    </a>\n  </div>\n  <div class=\"media-body\">\n    <h4 class=\"media-heading\">\n      <a [routerLink]=\"['/followers',follower.id,follower.login]\" >{{ follower.login }}</a>\n    </h4>\n    <a href=\"follower.html_url\">{{ follower.html_url }}</a>\n  </div>\n</div>\n", styles: [".avatar {\r\n  width: 80px;\r\n  height: 80px;\r\n  border-radius: 100%;\r\n}\r\n"] }]
    }], function () { return [{ type: i1.ActivatedRoute }, { type: i2.FollwersService }, { type: i3.AuthService }]; }, null); })();
//# sourceMappingURL=followers.component.js.map