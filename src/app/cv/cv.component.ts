import { Component, OnInit, ViewChild } from '@angular/core';
import { sectionContent } from '../sectionComponents/section-content.component';
import { CvContentService } from '../services/cv-content/cv-content.service';

// Directives
import { SectionDirective } from '../sectionDirectives/section.directive';


@Component({
  selector: 'CVVI-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.sass']
})
export class CvComponent implements OnInit {
  private contents?: any = null;
  constructor(private cvService: CvContentService) { } 

  // View child per section
  @ViewChild(SectionDirective, {static: true }) allSections!: SectionDirective;

  // Output view 

  ngOnInit(): void {
    this.contents = this.cvService.getCVContents();
 
    // setup sections


    const viewRef = this.allSections.viewContainerRef;
    viewRef.clear();

    const contentElementRefs = Object.keys(this.contents.sections).map(sectionName => {
      let section = this.contents.sections[sectionName];

      const sectionRefs = section.instances.map((instance: any, index: number) => {
        const elementRef = viewRef.createComponent<sectionContent>(section.componentClass);
        
        // Create an ID
        const elementId = sectionName + index;
        
        // Give it the instance data and append the section title
        elementRef.instance.sectionContent = Object.assign({ 
          id: elementId,
          sectionTitle: section.title
        }, instance);

        return { id: elementId, elementRef };
      });

      return sectionRefs
    });

    // For animation or debugging
    console.log('Component Refs ', contentElementRefs);

  }
}
