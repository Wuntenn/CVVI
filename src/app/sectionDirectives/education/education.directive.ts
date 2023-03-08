import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[cVVIEducation]'
})
export class EducationDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
