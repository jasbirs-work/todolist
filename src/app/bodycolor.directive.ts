import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBodycolor]'
})
export class BodycolorDirective {

  constructor(public el:ElementRef) { 
    el.nativeElement.style.backgroundColor = 'green'
    el.nativeElement.style.color = 'white'
    el.nativeElement.style.textAlign = 'center'
  }

}
