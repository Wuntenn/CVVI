import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CvComponent } from './cv/cv.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DescriptionComponent } from './sectionComponents/description/description.component';
import { TechnicalComponent } from './sectionComponents/technical/technical.component';
import { EducationalComponent } from './sectionComponents/educational/educational.component';
import { EmploymentComponent } from './sectionComponents/employment/employment.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    CvComponent,
    PageNotFoundComponent,
    DescriptionComponent,
    TechnicalComponent,
    EducationalComponent,
    EmploymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
