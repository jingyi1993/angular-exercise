import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
import {BehaviorSubject} from 'rxjs';
import * as firebase from 'firebase';

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
    // this.authService.signinUser(email, password);
     this.authService.signinUser(email, password).then(res => {
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
     })
       .catch(err => {
         console.log(err);
         this.authService.MessageOfSignIn = 'The password is invalid or the user does not have a password.';
       });
    // setTimeout(() => {
    //   if (this.authService.messageSource) {
    //     this.router.navigateByUrl('/profile');
    //   }
    //   this.spinner = 'true' ;
    // }, 2000);

  }

}
