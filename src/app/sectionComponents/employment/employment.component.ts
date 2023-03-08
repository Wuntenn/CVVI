import { Component, Input } from '@angular/core';
import { sectionContent } from '../section-content.component';

@Component({
  selector: 'CVVI-employment',
  templateUrl: './employment.component.html',
  styleUrls: ['./employment.component.sass']
})
export class EmploymentComponent implements sectionContent {
  @Input() title: string = '';
  @Input() sectionContent: any;
}
