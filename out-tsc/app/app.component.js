import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "./nav-bar/nav-bar.component";
export class AppComponent {
    constructor() {
        this.post = {
            title: 'wass',
            isfavrite: false,
        };
        this.value = 'wassim';
        this.title = 'angular_project';
        this.isactive = false;
        this.urlimage = 'https://imgupscaler.com/images/samples/animal-after.webp';
        this.colspan = 2;
        this.task = {
            titre: 'wassim',
            assignee: {
                name: null,
            },
        };
    }
    Onkeyup() {
        console.log(this.value);
    }
    ondivClick(event) {
        console.log('favorite change : ' + event.newvalue);
    }
    Show($event) {
        $event.stopPropagation();
        console.log('test log', $event);
        this.isactive = !this.isactive;
    }
    getTitre() {
        return this.title;
    }
    static { this.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelement(0, "app-nav-bar")(1, "router-outlet");
        } }, dependencies: [i1.RouterOutlet, i2.NavBarComponent] }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AppComponent, [{
        type: Component,
        args: [{ selector: 'app-root', template: "<!-- <h1 style=\"text-align: center; text-transform: capitalize\">Hello wassim</h1>\n\n<app-courses></app-courses>\n<h2 [textContent]=\"title\"></h2>\n<img [src]=\"urlimage\" alt=\"test img\" title=\"oiseaux\" width=\"500px\" />\n<br />\n<div>\n  <input\n    name=\"value\"\n    [(ngModel)]=\"value\"\n    type=\"text\"\n    (keyup.space)=\"Onkeyup()\"\n  />\n  <button\n  [ngStyle]=\"{\n    'backgroundColor':isactive ? 'blue' : 'red',\n    'color':isactive ? 'black' : 'white',\n    'fontWeight':isactive ? 'blod' : 'normal'\n  }\"\n\n    (click)=\"Show($event)\"\n  >\n    ajouter\n  </button>\n</div>\n\n<app-favorite\n  [isfavrite]=\"post.isfavrite\"\n  (change)=\"ondivClick($event)\"\n></app-favorite>\n<br />\n<br />\n<app-panel>\n  <div class=\"heading\">Heading</div>\n  <ng-container class=\"body\">\n    <h5 class=\"card-title\">Primary card title</h5>\n    <p class=\"card-text\">\n      Some quick example text to build on the card title and make up the bulk of\n      the card's content.\n    </p>\n  </ng-container>\n</app-panel>\n\n<div>{{task.assignee?.name}}</div>\n<input type=\"text\" [appInputFormat]=\"'lowercase'\" > -->\n\n<!-- <contact-form></contact-form> -->\n<!-- <signup-form></signup-form>\n<new-course-form></new-course-form> -->\n<app-nav-bar></app-nav-bar>\n\n<router-outlet></router-outlet>\n" }]
    }], null, null); })();
//# sourceMappingURL=app.component.js.map