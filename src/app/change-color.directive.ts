import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[app-ChangeColor]'
})
export class ChangeColorDirective {

  constructor(elem: ElementRef, renderer: Renderer2) {
    renderer.setStyle(elem.nativeElement, 'color', 'red');
  }

}
