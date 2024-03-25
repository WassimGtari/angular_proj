import { Directive, HostListener, Input, } from '@angular/core';
import * as i0 from "@angular/core";
export class InputFormatDirective {
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
    }
    onMouseOver() {
        let part = this.el.nativeElement.querySelector('.card-text');
        this.renderer.setStyle(part, 'display', 'block');
    }
    onMouseOut() {
        let part = this.el.nativeElement.querySelector('.card-text');
        this.renderer.setStyle(part, 'display', 'none');
    }
    onblur() {
        let part = this.el.nativeElement.value;
        if (this.format == 'lowercase')
            this.el.nativeElement.value = part.toLocaleLowerCase();
        else
            this.el.nativeElement.value = part.toLocaleUpperCase();
        //this.renderer.setStyle(part, 'display', 'none');
    }
    static { this.ɵfac = function InputFormatDirective_Factory(t) { return new (t || InputFormatDirective)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2)); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: InputFormatDirective, selectors: [["", "appInputFormat", ""]], hostBindings: function InputFormatDirective_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("mouseover", function InputFormatDirective_mouseover_HostBindingHandler() { return ctx.onMouseOver(); })("mouseout", function InputFormatDirective_mouseout_HostBindingHandler() { return ctx.onMouseOut(); })("blur", function InputFormatDirective_blur_HostBindingHandler() { return ctx.onblur(); });
        } }, inputs: { format: ["appInputFormat", "format"] } }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(InputFormatDirective, [{
        type: Directive,
        args: [{
                selector: '[appInputFormat]',
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }]; }, { format: [{
            type: Input,
            args: ['appInputFormat']
        }], onMouseOver: [{
            type: HostListener,
            args: ['mouseover']
        }], onMouseOut: [{
            type: HostListener,
            args: ['mouseout']
        }], onblur: [{
            type: HostListener,
            args: ['blur']
        }] }); })();
//# sourceMappingURL=input-format.directive.js.map