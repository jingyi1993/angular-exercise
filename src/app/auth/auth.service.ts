import * as firebase from 'firebase';

export class AuthService {
  signupUser (email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch(err => console.log(err));

  }
}
