import { Directive, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

// Working with DOM
@Directive({
  selector: '[appHighlight]'      // <div appHighlight></div>
})
export class HighlightDirective {

  @Input() myColor: string;
  @HostBinding('style.background-color') bgColor: string;

  @HostListener('mouseenter') onmouseenter() {
    // console.log("mouse entered");
    this.bgColor = this.myColor;
  }

  @HostListener('mouseleave') onmouseleave() {
    // console.log("mouse leave");
    this.bgColor = 'transparent';
  }

  constructor(private elementRef: ElementRef) {
    //  this.elementRef.nativeElement.style.backgroundColor = 'lightgrey';
   }

}
