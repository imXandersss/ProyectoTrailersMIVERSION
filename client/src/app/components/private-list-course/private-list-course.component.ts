import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/models/course.model';
import { TrailerService } from 'src/app/services/trailer.service';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-private-list-course',
  templateUrl: './private-list-course.component.html',
  styleUrls: ['./private-list-course.component.css']
})
export class PrivateListCourseComponent implements OnInit {

  course: Course={
    _id: 0,
    name: '',
    description: '',
    category: '',
    image: '',
    director:'',
    actors:'',
    year:'',
    link:''
  }
  courses:  any =[];
  constructor(private courseService: CoursesService) { }

  ngOnInit(): void {
    this.courseService.getPrivateCourse()
    .subscribe(
      res=>{
        console.log(res);
        this.courses = res;
      },
      err=>console.log(err)
    )


  }


  deleteCourse(id: string )
  {
    this.courseService.deleteCourse(id).subscribe(
      res=>{
        console.log(res)
      },
      err=> console.log(err)
    )
    this.refresh()
  }

 editTrailer(id: string, name: string){
  console.log(name)
  this.courseService.editTrailer(id, name)
    }
    

  refresh(): void { window.location.reload(); }



}
