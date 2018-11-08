import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles : [`
  h3{color: pink}
  `]
})
export class AppComponent {

  ngOnInit () {
    firebase.initializeApp({
      apiKey:  "AIzaSyAZ_djBEUVQAFzDBPsECqF9saGJpXwx0jU",
      authDomain:  "angular-signin-3fd3d.firebaseapp.com",
      databaseURL:  "https://angular-signin-3fd3d.firebaseio.com"
    });
  }


}
