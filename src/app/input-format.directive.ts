import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appInputFormat]',
})
export class InputFormatDirective {
  @Input('appInputFormat') format;
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseover') onMouseOver() {
    let part = this.el.nativeElement.querySelector('.card-text');
    this.renderer.setStyle(part, 'display', 'block');
  }

  @HostListener('mouseout') onMouseOut() {
    let part = this.el.nativeElement.querySelector('.card-text');
    this.renderer.setStyle(part, 'display', 'none');
  }

  @HostListener('blur') onblur() {
    let part: string = this.el.nativeElement.value;
    if (this.format == 'lowercase')
      this.el.nativeElement.value = part.toLocaleLowerCase();
    else this.el.nativeElement.value = part.toLocaleUpperCase();
    //this.renderer.setStyle(part, 'display', 'none');
  }
}
