import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Course } from '../models/course.model';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  


 
URL='http://localhost:3000/api/';

  constructor(private http: HttpClient,
    private router: Router) { }
  
    getOtro(id: String){
      return this.http.get(`${this.URL}course/${id}`);
    }
  getCourse(){
    return this.http.get<any>(environment.ApiUrl + 'course');
  }
  getPrivateCourse(){
    return this.http.get<any>(environment.ApiUrl  + 'course');
  }
  getOne(id: string){
    return this.http.get<any>(`${environment.ApiUrl}course/${id}`);
  }
  createCourse(_course  : any ){
    return this.http.post<any>(environment.ApiUrl + 'course', _course);
    this.router.navigate(['./signin']);
  }

  details(id:String){
    alert(id)
    this.router.navigate(['/view',id]);
  }

  deleteCourse(id: string ){
    return this.http.delete(`${environment.ApiUrl}course/${id}`);
  }

  editTrailer(id: string, name: string){
    return this.http.put(`${environment.ApiUrl}/${id}`,{name});
  }
  updateCourse(id:string|number, updateCourse: Course):Observable<any>{
    return this.http.put(`${environment.ApiUrl}course/${id}`, updateCourse);
  }
}
