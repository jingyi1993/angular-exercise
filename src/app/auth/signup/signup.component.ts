import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {NgModel} from '@angular/forms';
import {AuthService} from '../auth.service';
import {HttpClient} from '@angular/common/http';
import * as firebase from 'firebase';
import {Router} from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})


export class SignupComponent implements OnInit {

  password = '';
  repassword = '';
  confirmInformation = '';
  router: Router;
  spinner: string = 'true';



  constructor(private authService: AuthService, private http: HttpClient, _router: Router) {
    this.router = _router;
  }

  ngOnInit() {
  }

  onSignup(form: NgForm) {
    this.spinner = 'false';
    console.log('signup form submitted!');
    console.log(form);

    const email = form.value.email;
    const password = form.value.password;
    this.authService.signupUser(email, password)
      .then(res => {
        const uuid = res.user.uid;
        firebase.database().ref('users/' + uuid).set(
          form.value
        );
        console.log(form.value);
        this.authService.signinUser(form.value.email, form.value.password).then(  res => {
          this.authService.MessageOfSignIn = 'Success!';
          console.log(this.authService.MessageOfSignIn);
          firebase.auth().currentUser.getIdToken()
            .then(
              (token: string) => this.authService.token = token
            );
          const userId = firebase.auth().currentUser.uid;
          // get user's information from firebase database
          firebase.database().ref('/users/' + userId).once('value').then((snapshot) => {
            // console.log(snapshot.val());
            const userEmail = (snapshot.val() && snapshot.val().email) || 'Anonymous';
            this.authService.messageSource = new BehaviorSubject(snapshot.val()).asObservable();
            console.log('1' + this.authService.messageSource);
            this.router.navigateByUrl('/profile');
          });
        });
        // setTimeout(() => {
        //   this.router.navigateByUrl('/profile');
        //   this.spinner = 'true'
        // }, 2000);
      })
      .catch(err => console.log(err));
  }

  inputHandler(email: NgModel) {
    console.log(email);
  }

  passwordChangeHandler(password: NgModel) {
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


