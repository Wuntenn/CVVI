import { Component, Input, OnInit } from '@angular/core';
import { sectionContent } from '../section-content.component';

@Component({
  selector: 'CVVI-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.sass']
})
export class DescriptionComponent implements sectionContent, OnInit {
  @Input() title: string = '';
  @Input() sectionContent: any;

  ngOnInit() {
    console.log('stuff: ', this.sectionContent);
  }
}
