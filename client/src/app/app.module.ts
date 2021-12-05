import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CourseComponent } from './components/course/course.component';
import { PrivateCourseComponent } from './components/private-course/private-course.component';
import { PrivateListCourseComponent } from './components/private-list-course/private-list-course.component';
import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { TrailerComponent } from './components/trailer/trailer.component';
import { ViewComponent } from './components/view/view.component';
import { PreviewComponent } from './components/preview/preview.component';
import { EditComponent } from './components/edit/edit.component';
import { SearchComponent } from './components/search/search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FilterPipe } from './pipes/filter.pipe';
import { SearchPipe } from './pipes/search.pipe';
@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    ProfileComponent,
    CourseComponent,
    PrivateCourseComponent,
    PrivateListCourseComponent,
    TrailerComponent,
    ViewComponent,
    PreviewComponent,
    EditComponent,
    SearchComponent,
    FilterPipe,
    SearchPipe
  ],
  imports: [
    MatInputModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthGuard,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
