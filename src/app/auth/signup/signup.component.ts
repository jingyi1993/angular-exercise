import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {NgModel} from '@angular/forms';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  password = '';
  repassword = '';
  confirmInformation = '';


  constructor(private authService: AuthService) { }

  ngOnInit() {
  }
  onSignup (form: NgForm) {
    console.log('signup form submitted!');
    console.log(form);

    const email = form.value.email;
    const password = form.value.password;
    this.authService.signupUser(email, password);

  }
  inputHandler (email: NgModel) {
    console.log(email);
  }
  passwordChangeHandler (password: NgModel) {
    console.log(password);
    this.password = password.value;
  }

  repasswordChangeHandler(repassword: NgModel) {
    console.log(repassword);
    this.repassword = repassword.value;
    if (this.password !== this.repassword) {
      this.confirmInformation = 'please re-enter right password!';
    } else {
      this.confirmInformation = 'password matches';
    }
  }
 }


