import { Injectable } from '@angular/core';
import { ContentItem } from 'src/app/sectionComponents/content-item';
import { DescriptionComponent } from 'src/app/sectionComponents/description/description.component';
import { EducationalComponent } from 'src/app/sectionComponents/educational/educational.component';
import { EmploymentComponent } from 'src/app/sectionComponents/employment/employment.component';

@Injectable({
  providedIn: 'root'
})
export class CvContentService {
  getCVContents() {
    return {
      cvOwner: '',
      contactDetails: {
        websites: ['https://www.daronjones.com', 'https://www.linkedin.com/in/daronjones'],
        emails: ['daronalerts@gmail.com'],
        phoneNumers: ['+44 (0) 7852 367 400']      
      },
      sections:{
        summary: new ContentItem('Summary', DescriptionComponent, { descriptionContent: [
          'Mid-to-Senior level Software Engineer with ability to work with all levels of staff, stakeholders, and customers.',
          'Able to research and craft effective highly maintainable solutions to technical tasks.',
          'Has a focus on emerging web standards and technologies. Maintains a proactive approach to keeping informed with the latest changes.',
          'Enjoys working outside of comfort zone and regularly takes on private projects to explore new ideas and concepts.',
          'Interested in increasing exposure with AWS, Software Architecture, Cloud Infrastructure and scaling.'
        ]}),
        technical: new ContentItem('Technical', DescriptionComponent, { technicalContent: [{
          domain: 'JavaScript (JS)',
          knowledge: ['OO JavaScript', 'ES5', 'ES6']
        }, {
          domain: 'JS Frameworks',
          knowledge: ['Angular/AngularJS', 'JQuery', 'Greensock', 'TypeScript']
        }, {
          domain: 'JS Testing',
          knowledge: ['ShouldJS', 'Mocha', 'Jasmine', 'Karma', 'Protractor', 'WebDriver', 'PhantomJS']
        }, {
          domain: 'Servers',
          knowledge: ['Node', 'nginx']
        }, {
          domain: 'Tooling',
          knowledge: ['Git', 'gulp', 'grunt', 'bower', 'Bash']
        }, {
          domain: 'Infrastructure/Virtualisation',
          knowledge: ['AWS', 'Puppet', 'Virtualbox', 'Vagrant', 'Docker']
        }, {
          domain: 'Web Standards',
          knowledge: ['HTML5', 'CSS', 'SVG', 'XML', 'Service-worker']
        }, {
          domain: 'Databases',
          knowledge: ['MongoDB', 'MySQL', 'CouchDB']
        }, {
          domain: 'Other',
          knowledge: ['MQL, C++, Ruby, Ruby on Rails']
        }]}),
        education: new ContentItem('Education', EducationalComponent, { educationalContent: [{
          yearStarted: 1999,
          yearFinished: 2004,
          Accreditation: 'BSc Applied Computing',
          Establishment: 'Middlesex University, London',
        },{
          yearStarted: 1997,
          yearFinished: 1999,
          Accreditation: 'BSc Applied Computing',
          Establishment: 'Middlesex University, London',
        },{
          yearStarted: 1991,
          yearFinished: 1997,
          Accreditation: 'BSc Applied Computing',
          Establishment: 'Middlesex University, London',
        }]}),
        personal: new ContentItem('Personal', DescriptionComponent, { descriptionContent: [
          'Autodidact and artist with hobbies including illustration, 3D, music- production, Forex and Arduino.',
          'Enjoys creating alternative experimental music and releasing tracks on Soundcloud.',
          'Has a strong passion for illustration. This is reflected in the creation of his own works, and time spent appreciating the works of great artists on platforms such as Pinterest, Instagram, ArtStation, Pixiv, and DeviantArt.',
          'Has been learning Forex trading for the past 3 years with a view to investing. In the process has developed a few Expert Advisors in MetaTrader that are able to execute unassisted trades.',
          'Working on his mind with meditation following the guide from the book: The Mind Illuminated by Culadasa (John Yates)',
          'Fits the Myer-Briggs personality profile INFJ comprising only 1% of the population. (see: https://bit.ly/369u6K1).',
          'Would be a great addition to a diverse, detail-oriented, creative team!',
        ]}),
        employments: new ContentItem('Employment Summary', EmploymentComponent, { employmentContent: [{
          tenureBegan: new Date(2021, 8),
          tenureEnded: new Date(2023, 1),
          employer: 'Asite Solutions Ltd',
          position: 'AppBuilder Senior Developer',
          responsibilities: [
            'Developing JavaScript and C# Projects',
            'Performing API Integration',
            'Sole UK Developer working with remote development team',
          ]
        }, {
          tenureBegan: new Date(2020, 5),
          tenureEnded: new Date(2021, 8),
          employer: '',
          position: 'Arduino Developer',
          responsibilities: [
            'Learning Arduino development to create a product (coming soon!)',
            'Developing accompanying site on AWS at http:umindu.com',
            'Creating 3D printable assets using AutoDesk Fusion360',
          ]
        }, {
          tenureBegan: new Date(2019, 10),
          tenureEnded: new Date(2020, 5),
          employer: 'British United Provident Association (BUPA)',
          position: 'IT Technical Security Operations Analyst',
          responsibilities: [
            'Data modelling and creation of custom areas/controls within IPAK',
            'Coercion of modelled XML data into interactive XSLT reports',
            'Supporting IPAK system to strengthen IT systems and reduce costs',
            'Interviewing stakeholders as part of an information gathering drive',
            'Remote team meetings to decide future strategy for data accrual'
          ]
        }, {
          tenureBegan: new Date(2017, 5),
          tenureEnded: new Date(2019, 6),
          employer: 'Grow Software',
          position: 'Full-Stack Software Engineer',
          responsibilities: [
            'Developing a distributed web app to Encrypt/Decrypt 3D assets',
            'Full-stack web development using MongoDB, Express, AngularJS, Node (MEAN stack), with AWS',
            'UI integration, RESTful APIs, client and server-side services'
          ]
        }, {
          tenureBegan: new Date(2015, 7),
          tenureEnded: new Date(2017, 5),
          employer: '',
          position: 'MEAN Stack Developer',
          responsibilities: [
            'Working full-time on a time-management web application',
            'Uses AngularJS, Angular Material, Greensock SVG Animations',
            'Implements RESTful APIs, LetsEncrypt SSL, PayPal HATEOAS API',
            'Was an active participant in MeanJS Github Open Source project',
          ]
        }, {
          tenureBegan: new Date(2015, 3),
          tenureEnded: new Date(2015, 7),
          employer: 'NetplayTV Ltd',
          position: 'UI/UX Web Developer',
          responsibilities: [
            'Drupal customisation and template creation',
            'Responsive website overhaul based on updated designs'
          ]
        }, {
          tenureBegan: new Date(2014, 5),
          tenureEnded: new Date(2015, 3),
          employer: '',
          position: 'DevOps Developer',
          responsibilities: [
            'Learning and documenting Puppet best practice',
            'Created Puppet specification for my Node and Ruby VPS stacks',
            'Used Puppet Forge modules and created custom one as required',
            'Used Virtualbox with Vagrant to test and develop deployment scripts',
          ]
        }, {
          tenureBegan: new Date(2013, 7),
          tenureEnded: new Date(2014, 5),
          employer: 'Wallace HCL Limited',
          position: 'Front end Developer',
          responsibilities: [
            'Creating medical websites using HTML, CSS, and Javascript',
            'Creating cross browser email for campaigns',
            'Medical application development (using Skura: proprietry wrappers)',
          ]
        }, {
          tenureBegan: new Date(2013, 1),
          tenureEnded: new Date(2013, 5),
          employer: 'Webdadi Limited',
          position: 'Front end Developer and Designer',
          responsibilities: [
            'Creating estate agent websites using HTML, CSS, and Javascript',
            'Creating templates on a 14yo proprietary system: WebdadiCMS',
            'Designing template themes',
          ]
        }, {
          tenureBegan: new Date(2012, 4),
          tenureEnded: new Date(2012, 11),
          employer: 'Koffeecup Digital Production',
          position: 'Junior Front end Developer',
          responsibilities: [
            'Converting designs into compliant w3c-validated HTML markup',
            'Creating responsive CSS3, HTML5, and JQuery based assets',
            'Using Modernizr and HTML5Boilerplate with custom web-fonts',
            'Creation of campaign email templates from designs',
            '(Clients included: Orange, Canon, Diesel, and McDonalds)',
          ]
        }, {
          tenureBegan: new Date(2011, 5),
          tenureEnded: new Date(2012, 4),
          employer: '',
          position: 'iPhone Application Developer',
          responsibilities: [
            'Working on an iPhone application for SMART task management',
            'Used Objective-C, CoreData and UITableviews with Custom Cells',
            'Visuals created with UIBuilder with dynamically loaded sections',
            'XCode profiling and memory leak removal with NSZombies',
          ]
        }, {
          tenureBegan: new Date(2011, 5),
          tenureEnded: new Date(2011, 5),
          employer: 'Webfire',
          position: 'Web Developer',
          responsibilities: [
            'Used HTML, CSS and JQuery to implement Photoshop5 designs',
          ]
        }, {
          tenureBegan: new Date(2011, 3),
          tenureEnded: new Date(2011, 4),
          employer: 'Design Portfolio Online Services (DPOS) – Web Developer',
          position: '',
          responsibilities: [
            'Creating templates with HTML, CSS, JQuery and PHP from designs',
          ]
        }, {
          tenureBegan: new Date(2010, 10),
          tenureEnded: new Date(2011, 1),
          employer: 'Artlogic Media Ltd – Web Developer',
          position: '',
          responsibilities: [
            'Creating templates with HTML, CSS, JQuery, Python, and Pylons',
          ]
        }, {
          tenureBegan: new Date(2006, 2),
          tenureEnded: new Date(2008, 7),
          employer: '',
          position: 'Server Administrator',
          responsibilities: [
            'Set up IPTables, nginx, Mongrel and FCGi cluster',
            'Created a Ruby on Rails portfolio with a Postfix mail server',
            'Deployment of websites using Capistrano',
          ]
        }]})
      }
    };
  }
}
