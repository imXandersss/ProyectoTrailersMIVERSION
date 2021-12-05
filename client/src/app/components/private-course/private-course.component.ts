import { Component, NgIterable, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/services/courses.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from 'src/app/models/course.model';
import { DomSanitizer } from '@angular/platform-browser';
interface htmlInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}
@Component({
  selector: 'app-private-course',
  templateUrl: './private-course.component.html',
  styleUrls: ['./private-course.component.css']

})




export class PrivateCourseComponent implements OnInit {

  editTrailer(id: string, name: string){
    console.log(name)
    this.courseService.editTrailer(id, name)
    }

  course: Course = {
    _id: 0,
    name: '',
    description: '',
    category: '',
    image: '',
    director: '',
    actors: '',
    year: '',
    link: ''
  };


  courses: any = [];


  constructor(private activedRoute: ActivatedRoute, private courseService: CoursesService, private router: Router, private sanitizer: DomSanitizer) { }

  

  ngOnInit(): void {
    const params = this.activedRoute.snapshot.params;
    if (params['id']) {
      this.courseService.getOne(params['id'])
        .subscribe(
          res => {
            //console.log(res)
            const resp = res;


            this.course._id = res
          },
          err => console.error(err)
        )
    }




  }




  createCourse() {
    this.courseService.createCourse(this.course)
      .subscribe(
        res => {
          console.log(res);//token
          this.router.navigate(['/private-list']);

        },
        err => console.log(err)
      )
    //this.router.navigate(['/private-list']);

  }

  // updateGame() {
  //   this.courseService.updateCourse(this.course._id, this.course)
  //     .subscribe(
  //       res => {
  //         console.log(res);
  //         this.router.navigate(['/games']);
  //       },
  //       err => console.error(err)
  //     )
  // }
  refresh(): void { window.location.reload(); }

  // deleteCourse(){
  //   this.courseService.deleteCourse(this.course)
  //   .subscribe(
  //     res=>{
  //       console.log(res);
  //     }
  //   )
  // }



 

}
