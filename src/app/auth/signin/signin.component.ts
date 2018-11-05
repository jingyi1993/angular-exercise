import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
    message: '';

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onSignin (form: NgForm ) {
    console.log('signin form submitted!');
    console.log(form);

    const email = form.value.email;
    const password = form.value.password;
    this.authService.signinUser(email, password);
    if ( this.authService.token ) {
      this.message = 'success';
    } else {
      this.message = this.authService.errMessage;
    }
  }

}
