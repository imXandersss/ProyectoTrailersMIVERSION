import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class Trailer{
  _id: number = 0
  title: string = ''
  director: string = ''
  review: string = ''
  actor: string = ''
  year: number = 1929

}
