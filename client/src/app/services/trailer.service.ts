import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Trailer } from '../models/trailer.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class TrailerService {

  constructor(private http: HttpClient,
     private router: Router) { }
     getTrailer(){
      return this.http.get<Trailer>(environment.ApiUrl + 'trailer');
    }

    getPrivateTrailer(){
      return this.http.get<Trailer>(environment.ApiUrl  + 'trailer');
    }

    createTrailer(_trailer  : Trailer ){
      return this.http.post<Trailer>(environment.ApiUrl + 'trailer', _trailer);
      this.router.navigate(['./signin']);
    }
   
   
    deleteTrailer( ){
      return this.http.delete(environment.ApiUrl + '/trailer/:id');
    }
}
