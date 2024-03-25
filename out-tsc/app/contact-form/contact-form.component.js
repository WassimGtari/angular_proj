import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
function ContactFormComponent_div_10_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, " First Name is Required !! ");
    i0.ɵɵelementEnd();
} }
function ContactFormComponent_div_10_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵnextContext(2);
    const _r1 = i0.ɵɵreference(9);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" First Name should be minimum ", _r1.errors["minlength"].requiredLength, " characters.");
} }
function ContactFormComponent_div_10_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, " First Name doesn't match the pattern.");
    i0.ɵɵelementEnd();
} }
function ContactFormComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵtemplate(1, ContactFormComponent_div_10_div_1_Template, 2, 0, "div", 19);
    i0.ɵɵtemplate(2, ContactFormComponent_div_10_div_2_Template, 2, 1, "div", 19);
    i0.ɵɵtemplate(3, ContactFormComponent_div_10_div_3_Template, 2, 0, "div", 19);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    const _r1 = i0.ɵɵreference(9);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", _r1.errors["required"]);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", _r1.errors["minlength"]);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", _r1.errors["pattern"]);
} }
function ContactFormComponent_option_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 20);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r8 = ctx.$implicit;
    i0.ɵɵproperty("value", item_r8.id);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(item_r8.name);
} }
function ContactFormComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 21)(1, "label");
    i0.ɵɵelement(2, "input", 22);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r9 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("value", item_r9.id);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", item_r9.name, " ");
} }
export class ContactFormComponent {
    constructor() {
        this.contactmethods = [
            {
                id: 1,
                name: 'Email',
            },
            {
                id: 2,
                name: 'SMS',
            },
        ];
    }
    log(x) {
        console.log(x);
    }
    onsubmit(f) {
        console.log(f);
    }
    static { this.ɵfac = function ContactFormComponent_Factory(t) { return new (t || ContactFormComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ContactFormComponent, selectors: [["contact-form"]], decls: 33, vars: 7, consts: [[3, "ngSubmit"], ["f", "ngForm"], [1, "form-group"], ["for", "firstName"], ["required", "", "type", "text", "minlength", "3", "maxlength", "12", "pattern", "wass", "name", "firstName", "id", "firstName", "ngModel", "", 1, "form-control", 3, "change"], ["firstName", "ngModel"], ["class", "alert alert-danger", 4, "ngIf"], ["for", "comment"], ["type", "text", "cols", "30", "rows", "10", "id", "comment", "name", "comment", "ngModel", "", 1, "form-control"], ["for", "contacmethod"], ["multiple", "", "name", "contacmethod", "id", "contacmethod", "ngModel", "", 1, "form-control"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "checkbox"], ["for", "checkbox"], ["type", "checkbox", "ngModel", "", "name", "isSub"], ["class", "radio", 4, "ngFor", "ngForOf"], [1, "btn", "btn-primary", 3, "disabled"], [1, "alert", "alert-danger"], [4, "ngIf"], [3, "value"], [1, "radio"], ["ngModel", "", "type", "radio", "name", "radiomethode", 3, "value"]], template: function ContactFormComponent_Template(rf, ctx) { if (rf & 1) {
            const _r10 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "h1");
            i0.ɵɵtext(1, "Contact Form");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(2, "hr");
            i0.ɵɵelementStart(3, "form", 0, 1);
            i0.ɵɵlistener("ngSubmit", function ContactFormComponent_Template_form_ngSubmit_3_listener() { i0.ɵɵrestoreView(_r10); const _r0 = i0.ɵɵreference(4); return i0.ɵɵresetView(ctx.onsubmit(_r0)); });
            i0.ɵɵelementStart(5, "div", 2)(6, "label", 3);
            i0.ɵɵtext(7, "First Name");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "input", 4, 5);
            i0.ɵɵlistener("change", function ContactFormComponent_Template_input_change_8_listener() { i0.ɵɵrestoreView(_r10); const _r1 = i0.ɵɵreference(9); return i0.ɵɵresetView(ctx.log(_r1)); });
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(10, ContactFormComponent_div_10_Template, 4, 3, "div", 6);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(11, "div", 2)(12, "label", 7);
            i0.ɵɵtext(13, "Comment");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(14, "textarea", 8);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(15, "div", 2)(16, "label", 9);
            i0.ɵɵtext(17, "Contact Method");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(18, "select", 10)(19, "option", 11);
            i0.ɵɵtext(20, "Choissez une m\u00E9thode ");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(21, ContactFormComponent_option_21_Template, 2, 2, "option", 12);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(22, "div", 13)(23, "label", 14);
            i0.ɵɵelement(24, "input", 15);
            i0.ɵɵtext(25, " Yes ");
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(26, ContactFormComponent_div_26_Template, 4, 2, "div", 16);
            i0.ɵɵelementStart(27, "p");
            i0.ɵɵtext(28);
            i0.ɵɵpipe(29, "json");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(30, "br");
            i0.ɵɵelementStart(31, "button", 17);
            i0.ɵɵtext(32, "Submit");
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            const _r0 = i0.ɵɵreference(4);
            const _r1 = i0.ɵɵreference(9);
            i0.ɵɵadvance(10);
            i0.ɵɵproperty("ngIf", _r1.touched && _r1.invalid);
            i0.ɵɵadvance(11);
            i0.ɵɵproperty("ngForOf", ctx.contactmethods);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngForOf", ctx.contactmethods);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(29, 5, _r0.value));
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("disabled", _r0.invalid);
        } }, dependencies: [i1.NgForOf, i1.NgIf, i2.ɵNgNoValidate, i2.NgSelectOption, i2.ɵNgSelectMultipleOption, i2.DefaultValueAccessor, i2.CheckboxControlValueAccessor, i2.SelectMultipleControlValueAccessor, i2.RadioControlValueAccessor, i2.NgControlStatus, i2.NgControlStatusGroup, i2.RequiredValidator, i2.MinLengthValidator, i2.MaxLengthValidator, i2.PatternValidator, i2.NgModel, i2.NgForm, i1.JsonPipe] }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ContactFormComponent, [{
        type: Component,
        args: [{ selector: 'contact-form', template: "<h1>Contact Form</h1>\n<hr>\n<form #f=\"ngForm\" (ngSubmit)=\"onsubmit(f)\">\n\n\n  <div class=\"form-group\">\n    <label for=\"firstName\">First Name</label>\n    <input required type=\"text\" minlength=\"3\" maxlength=\"12\" pattern=\"wass\" name=\"firstName\" id=\"firstName\" class=\"form-control\" #firstName=\"ngModel\" ngModel (change)=\"log(firstName)\" />\n    <div class=\"alert alert-danger\" *ngIf=\"firstName.touched && firstName.invalid\">\n      <div *ngIf=\"firstName.errors['required']\">\n        First Name is Required !!\n      </div>\n      <div *ngIf=\"firstName.errors['minlength']\"> First Name should be minimum {{firstName.errors['minlength'].requiredLength}} characters.</div>\n      <div *ngIf=\"firstName.errors['pattern']\"> First Name doesn't match the pattern.</div>\n    </div>\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"comment\">Comment</label\n    ><textarea type=\"text\" cols=\"30\" rows=\"10\" id=\"comment\" name=\"comment\" class=\"form-control\" ngModel ></textarea>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"contacmethod\">Contact Method</label>\n    <select multiple name=\"contacmethod\" id=\"contacmethod\" class=\"form-control\" ngModel>\n      <option value=\"\">Choissez une m\u00E9thode </option>\n      <option *ngFor=\"let item of contactmethods\" [value]=\"item.id\">{{item.name}}</option>\n\n    </select></div>\n  <div class=\"checkbox\">\n    <label for=\"checkbox\">\n      <input type=\"checkbox\" ngModel  name=\"isSub\" > Yes\n    </label>\n  </div>\n  <div class=\"radio\" *ngFor=\"let item of contactmethods\">\n    <label >\n      <input ngModel type=\"radio\" name=\"radiomethode\" [value]=\"item.id\">\n      {{item.name}}\n    </label>\n  </div>\n\n  <p>{{f.value |  json}}</p>\n  <br>\n <button class=\"btn btn-primary\" [disabled]=\"f.invalid\">Submit</button>\n</form>\n" }]
    }], null, null); })();
//# sourceMappingURL=contact-form.component.js.map