import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {


  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    // message = this.authService.MessageOfSignIn;
  }

  onSignin (form: NgForm ) {
    console.log('signin form submitted!');
    console.log(form);

    const email = form.value.email;
    const password = form.value.password;
    // const current = this;
    this.authService.signinUser(email, password);
    //   .then(function() {
    //   current.message = 'success';
    //   }).catch(function() {
    //   current.message = 'error';
    // });
    //   .then(res => {
    //     current.message = 'success!';
    //     console.log(current.message);
    //     this.authService.getToken();
    //   }
    //   )
    //   .catch(err => {
    //     current.message = 'error';
    //     console.log(current.message);
    //   });
  }

}
