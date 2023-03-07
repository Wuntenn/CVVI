import { Component, Input } from '@angular/core';
import { sectionContent } from '../section-content.component';

@Component({
  selector: 'CVVI-technical',
  templateUrl: './technical.component.html',
  styleUrls: ['./technical.component.sass']
})
export class TechnicalComponent implements sectionContent {
  @Input() sectionContent: any;
}
