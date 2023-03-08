import { Component, OnInit, ViewChild } from '@angular/core';
import { EmploymentComponent } from '../sectionComponents/employment/employment.component';
import { sectionContent } from '../sectionComponents/section-content.component';
import { EducationDirective } from '../sectionDirectives/education/education.directive';
import { EmploymentDirective } from '../sectionDirectives/employment/employment.directive';
import { PersonalDirective } from '../sectionDirectives/personal/personal.directive';
import { SummaryDirective } from '../sectionDirectives/summary/summary.directive';
import { TechnicalDirective } from '../sectionDirectives/technical/technical.directive';
import { CvContentService } from '../services/cv-content/cv-content.service';

type AnySectionDirective = SummaryDirective | TechnicalDirective | EducationDirective | EmploymentDirective | PersonalDirective;

@Component({
  selector: 'CVVI-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.sass']
})
export class CvComponent implements OnInit{
  content?: any = null;
  constructor(private cvService: CvContentService) { } 

  // View child per section
  @ViewChild(SummaryDirective, {static: true }) summarySection!: SummaryDirective;
  @ViewChild(TechnicalDirective, {static: true }) technicalSection!: TechnicalDirective;
  @ViewChild(EducationDirective, {static: true }) educationSection!: EducationDirective;
  @ViewChild(EmploymentDirective, {static: true }) employmentSection!: EmploymentDirective;
  @ViewChild(PersonalDirective, {static: true }) personalSection!: PersonalDirective;


  ngOnInit(): void {
    this.content = this.cvService.getCVContents();

    const loadSectionObj = [
      { sectionView: this.summarySection, contentRef:'summary' },
      { sectionView: this.technicalSection, contentRef:'technical' },
      { sectionView: this.employmentSection, contentRef:'employment' },
      { sectionView: this.educationSection, contentRef:'education' },
      { sectionView: this.personalSection, contentRef:'personal' }
    ];
  
    // setup sections
    loadSectionObj.map(section => this.setupSection(section.sectionView, section.contentRef));

    console.log('hello components');
  }

  setupSection(sectionViewChild: AnySectionDirective, contentReference: string) {
    const viewRef = sectionViewChild.viewContainerRef;
    viewRef.clear();

    const elementRef = viewRef.createComponent<sectionContent>(this.content.sections[contentReference].component);
    elementRef.instance.sectionContent = this.content.sections[contentReference].sectionContent;
    elementRef.instance.title = this.content.sections[contentReference].title;
  }
}
