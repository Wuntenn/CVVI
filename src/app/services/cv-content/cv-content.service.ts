import { Injectable } from '@angular/core';
import { ContentItem } from 'src/app/sectionComponents/content-item';
import { DescriptionComponent } from 'src/app/sectionComponents/description/description.component';

@Injectable({
  providedIn: 'root'
})
export class CvContentService {
  getCVContents() {
    return {
      cvOwner: '',
      contactDetails: {
        websites: [],
        emails: [],
        phoneNumers: []      
      },
      sections:{
        summary: new ContentItem('Summary', DescriptionComponent, { descriptionContent: [
          'Mid-to-Senior level Software Engineer with ability to work with all levels of staff, stakeholders, and customers.',
          'Able to research and craft effective highly maintainable solutions to technical tasks.',
          'Has a focus on emerging web standards and technologies. Maintains a proactive approach to keeping informed with the latest changes.',
          'Enjoys working outside of comfort zone and regularly takes on private projects to explore new ideas and concepts.',
          'Interested in increasing exposure with AWS, Software Architecture, Cloud Infrastructure and scaling.'
        ]}),
        technical: new ContentItem('Technical', DescriptionComponent, { technicalContent: [
        ]}),
        education: new ContentItem('Education', DescriptionComponent, { educationalContent: [
        ]}),
        personal: new ContentItem('Personal', DescriptionComponent, { descriptionContent: [
          'Autodidact and artist with hobbies including illustration, 3D, music- production, Forex and Arduino.',
          'Enjoys creating alternative experimental music and releasing tracks on Soundcloud.',
          'Has a strong passion for illustration. This is reflected in the creation of his own works, and time spent appreciating the works of great artists on platforms such as Pinterest, Instagram, ArtStation, Pixiv, and DeviantArt.',
          'Has been learning Forex trading for the past 3 years with a view to investing. In the process has developed a few Expert Advisors in MetaTrader that are able to execute unassisted trades.',
          'Working on his mind with meditation following the guide from the book: The Mind Illuminated by Culadasa (John Yates)',
          'Fits the Myer-Briggs personality profile INFJ comprising only 1% of the population. (see: https://bit.ly/369u6K1).',
          'Would be a great addition to a diverse, detail-oriented, creative team!',
        ]}),
        employments: new ContentItem('Employment Summary', DescriptionComponent, { employmentContent: [
        ]}),
      }
    };
  }
}
