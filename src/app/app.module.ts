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
import { DescriptionDirective } from './sectionComponents/description/description.directive';
import { EducationDirective } from './sectionComponents/education/education.directive';
import { EmploymentDirective } from './sectionComponents/employment/employment.directive';
import { TechnicalDirective } from './sectionComponents/technical/technical.directive';

// Angular material toolbar
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [
    AppComponent,
    CvComponent,
    PageNotFoundComponent,
    DescriptionComponent,
    TechnicalComponent,
    EducationComponent,
    EmploymentComponent,
    EmploymentDirective,
    DescriptionDirective,
    EducationDirective,
    TechnicalDirective
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
