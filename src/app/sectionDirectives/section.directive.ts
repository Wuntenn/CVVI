import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[cVVISection]'
})
export class SectionDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}