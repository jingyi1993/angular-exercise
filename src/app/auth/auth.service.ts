import * as firebase from 'firebase';
import {BehaviorSubject} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable()

export class AuthService  {
  token;
  MessageOfSignIn;
  messageSource;
  currentMessage;

  signupUser(email: string, password: string) {
    return firebase.auth().createUserWithEmailAndPassword(email, password);

  }

  signinUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(res => {
        this.MessageOfSignIn = 'Success!';
        console.log(this.MessageOfSignIn);
        firebase.auth().currentUser.getIdToken()
          .then(
            (token: string) => this.token = token
          );
        const userId = firebase.auth().currentUser.uid;
        console.log(userId);
        // get user's information from firebase database
        firebase.database().ref('/users/' + userId).once('value').then((snapshot) => {
          const userEmail = (snapshot.val() && snapshot.val().email) || 'Anonymous';
          console.log(userEmail);
          console.log(snapshot.val());
          this.messageSource = new BehaviorSubject(snapshot.val()).asObservable();

          // console.log(messageSource);
        });

      })
      .catch(err => {
        console.log(err);
          this.MessageOfSignIn = 'Failed! ';
      });
  }

  // getToken () {
  //   return firebase.auth().currentUser.getIdToken();
  //     // .then(
  //     //   (token: string) => this.token = token,
  //     // )
  //     //  .catch(err => console.log(err));
  // }


  isAuthenticated() {
    // return this.token !== null;
    if (this.token) {
      return true;
    } else {
      return false;
    }
  }
}
