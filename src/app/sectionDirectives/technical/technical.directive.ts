import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[cVVITechnical]'
})
export class TechnicalDirective {
  constructor(public viewContainerRef : ViewContainerRef) {}
}
