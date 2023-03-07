import { Type } from '@angular/core';

export class ContentItem {
  constructor(public title: string, public component: Type<any>, public sectionContect: any) {}
}