import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCardComponent } from '../../components/course-card/course-card';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, CourseCardComponent],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseListComponent implements OnInit {

  isLoading = true;

  courses = [
    {
      id:1,
      name:'Angular',
      code:'ANG101',
      credits:4,
      gradeStatus:'passed'
    },
    {
      id:2,
      name:'Java',
      code:'JAVA201',
      credits:3,
      gradeStatus:'failed'
    },
    {
      id:3,
      name:'Python',
      code:'PY301',
      credits:2,
      gradeStatus:'pending'
    }
  ];

  ngOnInit(): void {

    setTimeout(()=>{
      this.isLoading = false;
    },1500);

  }

  trackByCourseId(index:number,course:any){
    return course.id;
  }

}
