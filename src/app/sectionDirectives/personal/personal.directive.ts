import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[cVVIPersonal]'
})
export class PersonalDirective {
  constructor(public viewContainerRef : ViewContainerRef) { }
}
