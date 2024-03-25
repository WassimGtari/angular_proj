import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../services/auth.service";
import * as i2 from "@angular/common";
import * as i3 from "@angular/router";
function NavBarComponent_li_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 7)(1, "a", 11);
    i0.ɵɵtext(2, "admin");
    i0.ɵɵelementEnd()();
} }
function NavBarComponent_li_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 7)(1, "a", 12);
    i0.ɵɵtext(2, "login");
    i0.ɵɵelementEnd()();
} }
function NavBarComponent_li_16_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 7)(1, "a", 13);
    i0.ɵɵlistener("click", function NavBarComponent_li_16_Template_a_click_1_listener() { i0.ɵɵrestoreView(_r4); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.authService.logout()); });
    i0.ɵɵtext(2, "logout");
    i0.ɵɵelementEnd()();
} }
export class NavBarComponent {
    constructor(authService) {
        this.authService = authService;
    }
    static { this.ɵfac = function NavBarComponent_Factory(t) { return new (t || NavBarComponent)(i0.ɵɵdirectiveInject(i1.AuthService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: NavBarComponent, selectors: [["app-nav-bar"]], decls: 17, vars: 3, consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", "bg-light"], [1, "container-fluid"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarTogglerDemo03", "aria-controls", "navbarTogglerDemo03", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["routerLink", "/", 1, "navbar-brand"], ["id", "navbarTogglerDemo03", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "me-auto", "mb-2", "mb-lg-0"], ["routerLinkActive", "active ", 1, "nav-item"], ["routerLink", "/followers", 1, "nav-link"], ["routerLink", "/posts", 1, "nav-link"], ["class", "nav-item", "routerLinkActive", "active ", 4, "ngIf"], ["routerLink", "/admin", 1, "nav-link"], ["routerLink", "/login", 1, "nav-link"], ["routerLink", "/login", 1, "nav-link", 3, "click"]], template: function NavBarComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "nav", 0)(1, "div", 1)(2, "button", 2);
            i0.ɵɵelement(3, "span", 3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "a", 4);
            i0.ɵɵtext(5, "Home");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "div", 5)(7, "ul", 6)(8, "li", 7)(9, "a", 8);
            i0.ɵɵtext(10, "Followers");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(11, "li", 7)(12, "a", 9);
            i0.ɵɵtext(13, "Posts");
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(14, NavBarComponent_li_14_Template, 3, 0, "li", 10);
            i0.ɵɵtemplate(15, NavBarComponent_li_15_Template, 3, 0, "li", 10);
            i0.ɵɵtemplate(16, NavBarComponent_li_16_Template, 3, 0, "li", 10);
            i0.ɵɵelementEnd()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(14);
            i0.ɵɵproperty("ngIf", ctx.authService.isLoggedIn() && ctx.authService.currentUser.admin);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx.authService.isLoggedIn());
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.authService.isLoggedIn());
        } }, dependencies: [i2.NgIf, i3.RouterLink, i3.RouterLinkActive], styles: ["a[_ngcontent-%COMP%]:hover{\r\n  color: red important;\r\n  background-color:darkgrey;\r\n}"] }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NavBarComponent, [{
        type: Component,
        args: [{ selector: 'app-nav-bar', template: "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <div class=\"container-fluid\">\n    <button class=\"navbar-toggler\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#navbarTogglerDemo03\" aria-controls=\"navbarTogglerDemo03\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <a class=\"navbar-brand\" routerLink=\"/\">Home</a>\n    <div class=\"collapse navbar-collapse\" id=\"navbarTogglerDemo03\">\n      <ul class=\"navbar-nav me-auto mb-2 mb-lg-0\">\n        <li class=\"nav-item\"routerLinkActive=\"active \">\n          <a class=\"nav-link\"   routerLink=\"/followers\">Followers</a>\n        </li>\n        <li class=\"nav-item\" routerLinkActive=\"active \">\n          <a class=\"nav-link\"  routerLink=\"/posts\">Posts</a>\n        </li>\n        <li class=\"nav-item\" routerLinkActive=\"active \"*ngIf=\"authService.isLoggedIn()&& authService.currentUser.admin\">\n          <a class=\"nav-link\"   routerLink=\"/admin\">admin</a>\n        </li>\n        <li class=\"nav-item\" routerLinkActive=\"active \"*ngIf=\"!authService.isLoggedIn()\">\n          <a class=\"nav-link\"   routerLink=\"/login\">login</a>\n        </li>\n        <li class=\"nav-item\" routerLinkActive=\"active \"*ngIf=\"authService.isLoggedIn()\">\n          <a class=\"nav-link\" (click)=\"authService.logout()\"  routerLink=\"/login\">logout</a>\n        </li>\n      </ul>\n\n    </div>\n  </div>\n</nav>\n", styles: ["a:hover{\r\n  color: red important;\r\n  background-color:darkgrey;\r\n}\r\n\r\n\r\n"] }]
    }], function () { return [{ type: i1.AuthService }]; }, null); })();
//# sourceMappingURL=nav-bar.component.js.map