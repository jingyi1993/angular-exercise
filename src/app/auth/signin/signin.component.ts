import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  spinner: string = 'true';
  router: Router;
  constructor(private authService: AuthService, _router: Router) {
    this.router = _router;
  }

  ngOnInit() {
    // message = this.authService.MessageOfSignIn;
  }

   onSignin (form: NgForm ) {
    this.spinner = 'false';
    console.log('signin form submitted!');
    console.log(form);
    const email = form.value.email;
    const password = form.value.password;
    this.authService.signinUser(email, password);
    setTimeout(() => {
      this.router.navigateByUrl('/profile');
      this.spinner = 'true' ;
    }, 2000);

  }

}
