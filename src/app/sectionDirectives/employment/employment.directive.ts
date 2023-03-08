import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[cVVIEmployment]'
})
export class EmploymentDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
