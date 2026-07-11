import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgClass, NgStyle } from '@angular/common';
import { CreditLabelPipe } from '../../pipes/credit-label';

@Component({
  selector: 'app-course-card',
  standalone:true,
  imports:[
    CommonModule,
    NgClass,
    NgStyle,
    CreditLabelPipe
  ],
  templateUrl:'./course-card.html',
  styleUrl:'./course-card.css'
})
export class CourseCardComponent{

  @Input() course:any;

  isExpanded=false;

  enrolled=false;

  toggleDetails(){
      this.isExpanded=!this.isExpanded;
  }

  get cardClasses(){

      return{

          'card--enrolled':this.enrolled,
          'card--full':this.course.credits>=4,
          'expanded':this.isExpanded

      }

  }

}
