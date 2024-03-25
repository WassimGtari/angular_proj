import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsernameValidators } from './username.validators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
function SignupFormComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 10);
    i0.ɵɵtext(1, "Username and Password invalid .");
    i0.ɵɵelementEnd();
} }
function SignupFormComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, "Checking for uniqueness...");
    i0.ɵɵelementEnd();
} }
function SignupFormComponent_div_8_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, "User Name is Required");
    i0.ɵɵelementEnd();
} }
function SignupFormComponent_div_8_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("User Name should be minimum ", ctx_r4.username.errors == null ? null : ctx_r4.username.errors["minlength"].requiredLength, " caractere");
} }
function SignupFormComponent_div_8_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, "UserName cannot contain space .");
    i0.ɵɵelementEnd();
} }
function SignupFormComponent_div_8_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, " UserName is already taken .");
    i0.ɵɵelementEnd();
} }
function SignupFormComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 10);
    i0.ɵɵtemplate(1, SignupFormComponent_div_8_div_1_Template, 2, 0, "div", 6);
    i0.ɵɵtemplate(2, SignupFormComponent_div_8_div_2_Template, 2, 1, "div", 6);
    i0.ɵɵtemplate(3, SignupFormComponent_div_8_div_3_Template, 2, 0, "div", 6);
    i0.ɵɵtemplate(4, SignupFormComponent_div_8_div_4_Template, 2, 0, "div", 6);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.username.errors == null ? null : ctx_r2.username.errors["required"]);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.username.errors == null ? null : ctx_r2.username.errors["minlength"]);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.username.errors == null ? null : ctx_r2.username.errors["connotContainSpace"]);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.username.errors["shouldBeUnique"]);
} }
export class SignupFormComponent {
    constructor() {
        this.form = new FormGroup({
            account: new FormGroup({
                username: new FormControl('', [
                    Validators.required,
                    Validators.minLength(3),
                    UsernameValidators.connotContainSpace,
                ], [UsernameValidators.shouldBeUnique]),
                password: new FormControl('', Validators.required),
            }),
        });
    }
    login() {
        this.form.setErrors({ invalidLogin: true });
    }
    get username() {
        return this.form.get('account.username');
    }
    static { this.ɵfac = function SignupFormComponent_Factory(t) { return new (t || SignupFormComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SignupFormComponent, selectors: [["signup-form"]], decls: 16, vars: 5, consts: [[3, "formGroup", "ngSubmit"], ["class", "alert alert-danger", 4, "ngIf"], ["formGroupName", "account"], [1, "form-group"], ["for", "userName"], ["id", "userName", "type", "text", "formControlName", "username", "autocomplete", "username", 1, "form-control"], [4, "ngIf"], ["for", "password"], ["id", "password", "type", "text", "formControlName", "password", 1, "form-control"], ["name", "submit", "type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [1, "alert", "alert-danger"]], template: function SignupFormComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "form", 0);
            i0.ɵɵlistener("ngSubmit", function SignupFormComponent_Template_form_ngSubmit_0_listener() { return ctx.login(); });
            i0.ɵɵtemplate(1, SignupFormComponent_div_1_Template, 2, 0, "div", 1);
            i0.ɵɵelementStart(2, "div", 2)(3, "div", 3)(4, "label", 4);
            i0.ɵɵtext(5, " UserName");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(6, "input", 5);
            i0.ɵɵtemplate(7, SignupFormComponent_div_7_Template, 2, 0, "div", 6);
            i0.ɵɵtemplate(8, SignupFormComponent_div_8_Template, 5, 4, "div", 1);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "div", 3)(10, "label", 7);
            i0.ɵɵtext(11, "Password");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(12, "input", 8);
            i0.ɵɵelementEnd()();
            i0.ɵɵelement(13, "br");
            i0.ɵɵelementStart(14, "button", 9);
            i0.ɵɵtext(15, "Sign Up");
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵproperty("formGroup", ctx.form);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.form.errors);
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("ngIf", ctx.username.pending);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.username.touched && ctx.username.invalid);
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("disabled", ctx.form.invalid);
        } }, dependencies: [i1.NgIf, i2.ɵNgNoValidate, i2.DefaultValueAccessor, i2.NgControlStatus, i2.NgControlStatusGroup, i2.FormGroupDirective, i2.FormControlName, i2.FormGroupName] }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SignupFormComponent, [{
        type: Component,
        args: [{ selector: 'signup-form', template: "<form [formGroup]=\"form\" (ngSubmit)=\"login()\">\n  <div *ngIf=\"form.errors\" class=\"alert alert-danger\">Username and Password invalid .</div>\n  <div formGroupName=\"account\">\n  <div class=\"form-group\">\n    <label for=\"userName\"> UserName</label>\n    <input\n      id=\"userName\"\n      type=\"text\"\n\n      class=\"form-control\"\n      formControlName=\"username\"\n      autocomplete=\"username\"\n    />\n    <div *ngIf=\"username.pending\">Checking for uniqueness...</div>\n    <div *ngIf=\"username.touched && username.invalid\" class=\"alert alert-danger\">\n     <div *ngIf=\"username.errors?.['required']\">User Name is Required</div>\n     <div *ngIf=\"username.errors?.['minlength']\">User Name  should be minimum {{username.errors?.['minlength'].requiredLength}} caractere</div>\n     <div *ngIf=\"username.errors?.['connotContainSpace']\">UserName cannot contain space .</div>\n     <div *ngIf=\"username.errors['shouldBeUnique']\"> UserName is already taken .</div>\n\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"password\">Password</label>\n    <input\n      id=\"password\"\n      type=\"text\"\n      class=\"form-control\"\n      formControlName=\"password\"\n    />\n  </div></div>\n<br>\n  <button name=\"submit\" class=\"btn btn-primary\" type=\"submit\" [disabled]=\"form.invalid\">Sign Up</button>\n\n</form>\n" }]
    }], null, null); })();
//# sourceMappingURL=signup-form.component.js.map