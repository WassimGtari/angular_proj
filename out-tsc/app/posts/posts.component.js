import { Component } from '@angular/core';
import { BadRequestError } from '../common/badrequiest-error';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "../services/post.service";
import * as i3 from "@angular/common";
function PostsComponent_li_4_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 4)(1, "button", 5);
    i0.ɵɵlistener("click", function PostsComponent_li_4_Template_button_click_1_listener() { const restoredCtx = i0.ɵɵrestoreView(_r4); const item_r2 = restoredCtx.$implicit; const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.deletePost(item_r2)); });
    i0.ɵɵtext(2, "delete");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", item_r2.title, "\n");
} }
export class PostsComponent {
    constructor(http, service) {
        this.http = http;
        this.service = service;
    }
    ngOnInit() {
        this.service
            .getAll()
            .subscribe({
            next: (response) => {
                this.posts = response;
                //console.log(response);
            },
            error: (error) => {
                throw error;
            },
        });
    }
    addpost(input) {
        let post = { title: input.value };
        this.posts.splice(0, 0, post);
        input.value = '';
        this.service.create(post).subscribe({
            next: (newpost) => {
                post['id'] = newpost.id;
                // console.log(newpost);
            },
            error: (error) => {
                this.posts.splice(0, 1);
                if (error instanceof BadRequestError) {
                    alert('This post not created.');
                }
                else {
                    throw error;
                }
            },
        });
    }
    deletePost(post) {
        this.service.delete(post.id);
    }
    updatepost(post) {
        this.service
            .update(post)
            .subscribe({
            next: (response) => {
                //console.log(response);
            },
            error: (error) => {
                if (error instanceof BadRequestError) {
                    alert('This post not created.');
                }
                else {
                    throw error;
                }
            },
        });
    }
    static { this.ɵfac = function PostsComponent_Factory(t) { return new (t || PostsComponent)(i0.ɵɵdirectiveInject(i1.HttpClient), i0.ɵɵdirectiveInject(i2.PostService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PostsComponent, selectors: [["app-posts"]], decls: 5, vars: 1, consts: [["type", "text", 1, "form-control", 3, "keyup.enter"], ["post", ""], [1, "list-group"], ["class", "list-group-item", 4, "ngFor", "ngForOf"], [1, "list-group-item"], [1, "btn", "btn-info", "btn-sm", 3, "click"]], template: function PostsComponent_Template(rf, ctx) { if (rf & 1) {
            const _r5 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "input", 0, 1);
            i0.ɵɵlistener("keyup.enter", function PostsComponent_Template_input_keyup_enter_0_listener() { i0.ɵɵrestoreView(_r5); const _r0 = i0.ɵɵreference(1); return i0.ɵɵresetView(ctx.addpost(_r0)); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(2, "div")(3, "ul", 2);
            i0.ɵɵtemplate(4, PostsComponent_li_4_Template, 4, 1, "li", 3);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngForOf", ctx.posts);
        } }, dependencies: [i3.NgForOf] }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PostsComponent, [{
        type: Component,
        args: [{ selector: 'app-posts', template: "<input type=\"text\" class=\"form-control\" (keyup.enter)=\"addpost(post)\" #post>\n<div>\n<ul class=\"list-group\">\n<li *ngFor=\"let item of posts\" class=\"list-group-item\">\n  <button class=\"btn btn-info btn-sm\" (click)=\"deletePost(item)\">delete</button>\n {{item.title}}\n</li>\n\n</ul>\n</div>\n" }]
    }], function () { return [{ type: i1.HttpClient }, { type: i2.PostService }]; }, null); })();
//# sourceMappingURL=posts.component.js.map