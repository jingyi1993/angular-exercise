import * as firebase from 'firebase';
import {BehaviorSubject} from 'rxjs';
import {Injectable} from '@angular/core';

// import {Router} from '@angular/router';

@Injectable()

export class AuthService {
  token;
  MessageOfSignIn;
  messageSource;

  signupUser(email: string, password: string) {
    return firebase.auth().createUserWithEmailAndPassword(email, password);
  }

  signinUser(email: string, password: string) {
    return firebase.auth().signInWithEmailAndPassword(email, password);
      // .then(res => {
      //   this.MessageOfSignIn = 'Success!';
      //   console.log(this.MessageOfSignIn);
      //   firebase.auth().currentUser.getIdToken()
      //     .then(
      //       (token: string) => this.token = token
      //     );
      //   const userId = firebase.auth().currentUser.uid;
      //   // get user's information from firebase database
      //   firebase.database().ref('/users/' + userId).once('value').then((snapshot) => {
      //     const userEmail = (snapshot.val() && snapshot.val().email) || 'Anonymous';
      //     this.messageSource = new BehaviorSubject(snapshot.val()).asObservable();
      //   });
      // })
      // .catch(err => {
      //   console.log(err);
      //   this.MessageOfSignIn = 'The password is invalid or the user does not have a password.';
      // });
  }

  getAllPosts () {
    return firebase.database().ref('/users/');
      // .once('value');
      // .then((snapshot) => console.log(snapshot.val()));
  }

  // isAuthenticated() {
  //   // return this.token !== null;
  //   if (this.token) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }
}
