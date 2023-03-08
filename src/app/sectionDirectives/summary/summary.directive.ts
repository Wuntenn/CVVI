import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[cVVISummary]'
})
export class SummaryDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
