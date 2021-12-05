import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Components
import { CourseComponent } from './components/course/course.component';
import { PrivateCourseComponent } from './components/private-course/private-course.component';
import { SigninComponent } from './components/signin/signin.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SignupComponent } from './components/signup/signup.component';
import { PreviewComponent } from './components/preview/preview.component';
import {ViewComponent} from './components/view/view.component'
import { AuthGuard } from './auth.guard';
import { PrivateListCourseComponent } from './components/private-list-course/private-list-course.component';
import { EditComponent } from './components/edit/edit.component';
const routes: Routes = [
  {
    path:'',
    redirectTo:'/course',
    pathMatch: 'full'
  },
  {
    path: 'course',
    component: CourseComponent
  },
  {
    path: 'private',
    component: PrivateCourseComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'private-list',
    component: PrivateListCourseComponent,
    canActivate:[AuthGuard]
  },

  {
    path: 'view/:id',
    component: ViewComponent,
    canActivate:[AuthGuard]
  },
  
  {
    path: 'private/edit/:id',
    component: EditComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'course/edit/:id',
    component: PreviewComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path:'signin',
    component:SigninComponent
  },
  {
    path: 'profile',
    component:ProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
