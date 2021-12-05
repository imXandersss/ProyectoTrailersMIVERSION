import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/services/courses.service';
import { Course } from 'src/app/models/course.model';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  constructor(private courseService: CoursesService, private router: ActivatedRoute, private activatedRoute: ActivatedRoute) {

   
   }
   
   

  id:string ='';
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

  
  ngOnInit(): void {
    const  params=this.activatedRoute.snapshot.params;
    if(params['id']){
      
      this.courseService.getOtro(params['id'])
      .subscribe(
        res=> {
          console.log(params['id']);
        },
        err => console.error(err)
      )
    }
    
  }

}
