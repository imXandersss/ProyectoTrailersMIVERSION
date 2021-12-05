import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  handleSearch(value: string) {

    this.Filtro_valor = value;

  }

  Filtro_valor = '';

  courses: any = [];

  constructor(private courseService: CoursesService) { }

  ngOnInit(): void {
    this.courseService.getCourse()
      .subscribe(
        res => {
          console.log(res)
          this.courses = res;
        }, err => console.log(err)
      )
  }

}
