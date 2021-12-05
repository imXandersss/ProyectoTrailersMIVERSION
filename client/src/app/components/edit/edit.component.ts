import { Component, OnInit } from '@angular/core';
import { PrivateListCourseComponent } from '../private-list-course/private-list-course.component';
import { ProfileComponent } from '../profile/profile.component';
import { PrivateCourseComponent } from '../private-course/private-course.component';
import { CoursesService } from 'src/app/services/courses.service';
import { Course } from 'src/app/models/course.model';



@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

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

  constructor(private courseService: CoursesService) { }
  id:string ='';
  ngOnInit(): void {
  }
  
  editTrailer(name: HTMLInputElement){
    this.courseService.editTrailer(this.id,name.value);
    }

}
