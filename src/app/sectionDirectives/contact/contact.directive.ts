import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[cVVIContact]'
})
export class ContactDirective {
  constructor(public viewContainerRef: ViewContainerRef ) { }
}
