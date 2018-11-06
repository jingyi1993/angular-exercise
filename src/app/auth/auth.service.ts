import * as firebase from 'firebase';

export class AuthService {
  token;
  errMessage;
  signupUser (email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch(err => console.log(err));

  }

  signinUser (email: string, password: string) {
     return firebase.auth().signInWithEmailAndPassword(email, password);
      // .then(res => {
      //   console.log(res);
      //   return new Promise(
      //     (resolve, reject) => {
      //       resolve();
      //     }
      //   );
      // }
      //   )
      // .catch(err => {
      //   console.log(err);
      //   return new Promise(
      //     (resolve, reject) => {
      //       resolve();
      //     }
      //   );
      // });
  }

  getToken () {
    return firebase.auth().currentUser.getIdToken()
      .then(
        (token: string) => this.token = token
      );

  }
}

