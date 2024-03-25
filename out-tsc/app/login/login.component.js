import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../services/auth.service";
import * as i2 from "@angular/router";
import * as i3 from "@angular/forms";
export class LoginComponent {
    constructor(authService, router, route) {
        this.authService = authService;
        this.router = router;
        this.route = route;
        this.credentials = { username: '', password: '' };
    }
    login() {
        this.authService.login(this.credentials).subscribe((user) => {
            if (user) {
                // Connexion réussie, rediriger vers le tableau de bord
                let url = this.route.snapshot.queryParamMap.get('returnUrl');
                this.router.navigate([url || '/posts']);
            }
            else {
                // Identifiants incorrects, afficher un message d'erreur ou effectuer une autre action appropriée
                console.log('Identifiants incorrects');
                alert('Identifiants incorrects');
            }
        });
    }
    static { this.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(i0.ɵɵdirectiveInject(i1.AuthService), i0.ɵɵdirectiveInject(i2.Router), i0.ɵɵdirectiveInject(i2.ActivatedRoute)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: LoginComponent, selectors: [["app-login"]], decls: 9, vars: 2, consts: [[3, "submit"], ["for", "username"], ["type", "text", "id", "username", "name", "username", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "password"], ["type", "password", "id", "password", "name", "password", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "btn", "btn-primary"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "form", 0);
            i0.ɵɵlistener("submit", function LoginComponent_Template_form_submit_0_listener() { return ctx.login(); });
            i0.ɵɵelementStart(1, "label", 1);
            i0.ɵɵtext(2, "Username");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "input", 2);
            i0.ɵɵlistener("ngModelChange", function LoginComponent_Template_input_ngModelChange_3_listener($event) { return ctx.credentials.username = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "label", 3);
            i0.ɵɵtext(5, "Password");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "input", 4);
            i0.ɵɵlistener("ngModelChange", function LoginComponent_Template_input_ngModelChange_6_listener($event) { return ctx.credentials.password = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "button", 5);
            i0.ɵɵtext(8, "Login");
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngModel", ctx.credentials.username);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngModel", ctx.credentials.password);
        } }, dependencies: [i3.ɵNgNoValidate, i3.DefaultValueAccessor, i3.NgControlStatus, i3.NgControlStatusGroup, i3.NgModel, i3.NgForm] }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LoginComponent, [{
        type: Component,
        args: [{ selector: 'app-login', template: "<!-- login.component.html -->\n<form (submit)=\"login()\">\n  <label for=\"username\" >Username</label>\n  <input type=\"text\" id=\"username\" name=\"username\" [(ngModel)]=\"credentials.username\" class=\"form-control\">\n\n  <label for=\"password\">Password</label>\n  <input type=\"password\" id=\"password\" name=\"password\" [(ngModel)]=\"credentials.password\"class=\"form-control\">\n\n  <button type=\"submit\" class=\"btn btn-primary\">Login</button>\n</form>\n" }]
    }], function () { return [{ type: i1.AuthService }, { type: i2.Router }, { type: i2.ActivatedRoute }]; }, null); })();
//# sourceMappingURL=login.component.js.map