import { Component, Input } from '@angular/core';
import { sectionContent } from '../section-content.component';

@Component({
  selector: 'CVVI-educational',
  templateUrl: './educational.component.html',
  styleUrls: ['./educational.component.sass']
})
export class EducationalComponent {
  @Input() sectionContent: any;
}
