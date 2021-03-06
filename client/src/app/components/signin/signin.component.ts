import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/models/user.model';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  user = {
    email: '',
    password: '',
  };

  constructor(private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void { }

  signIn() {
    this.authService.singIn(this.user)
      .subscribe(
        res => {
          console.log(res);//token
          localStorage.setItem('token', res);
          this.router.navigate(['/private']);

        },
        err => console.log(err)
      )
  }
}
