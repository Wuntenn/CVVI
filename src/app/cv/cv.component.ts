import { Component, OnInit } from '@angular/core';
import { CvContentService } from '../services/cv-content/cv-content.service';

@Component({
  selector: 'CVVI-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.sass']
})
export class CvComponent implements OnInit{
  content?: any = null;
  constructor(private cvService: CvContentService) { } 

  ngOnInit(): void {
    this.content = this.cvService.getCVContents();
  
    console.log('hello components');
  }
}
