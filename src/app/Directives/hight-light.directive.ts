import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHightLight]'
})
export class HightLightDirective {
  @Input() appHighlight = 'blue';

  constructor(private el: ElementRef) { 
    console.log('HightLightDirective');
  }

}
