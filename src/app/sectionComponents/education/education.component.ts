import { Component, Input } from '@angular/core';
import { sectionContent } from '../section-content.component';

@Component({
  selector: 'CVVI-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.sass']
})
export class EducationComponent implements sectionContent {
  @Input() sectionContent: any;
}
