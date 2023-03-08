import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CvComponent } from './cv/cv.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

// Section Components
import { DescriptionComponent } from './sectionComponents/description/description.component';
import { EducationComponent } from './sectionComponents/education/education.component';
import { EmploymentComponent } from './sectionComponents/employment/employment.component';
import { TechnicalComponent } from './sectionComponents/technical/technical.component';

// Directives
import { SummaryDirective } from './sectionDirectives/summary/summary.directive';
import { TechnicalDirective } from './sectionDirectives/technical/technical.directive';
import { EducationDirective } from './sectionDirectives/education/education.directive';
import { EmploymentDirective } from './sectionDirectives/employment/employment.directive';
import { PersonalDirective } from './sectionDirectives/personal/personal.directive';

// Angular material toolbar
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [
    AppComponent,
    CvComponent,
    PageNotFoundComponent,
    DescriptionComponent,
    EducationComponent,
    EmploymentComponent,
    TechnicalComponent,
    SummaryDirective,
    TechnicalDirective,
    EducationDirective,
    EmploymentDirective,
    PersonalDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
