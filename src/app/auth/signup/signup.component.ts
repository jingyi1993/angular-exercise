import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {NgModel} from '@angular/forms';
import {AuthService} from '../auth.service';
import {HttpClient} from '@angular/common/http';
import * as fireBase from 'firebase';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  password = '';
  repassword = '';
  confirmInformation = '';


  constructor(private authService: AuthService, private http: HttpClient) {
  }

  ngOnInit() {
  }

  onSignup(form: NgForm) {
    console.log('signup form submitted!');
    console.log(form);

    const email = form.value.email;
    const password = form.value.password;
    this.authService.signupUser(email, password)
      .then(res => {
        const uuid = res.user.uid;
        // this.http.post('https://angular-signin-3fd3d.firebaseio.com/data.json', form.value)
        //   .subscribe(
        //     (response) => console.log(response),
        //     (error) => console.log(error)
        //   );
        fireBase.database().ref('users/' + uuid).set(
          form.value
        );
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


