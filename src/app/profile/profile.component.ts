import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth/auth.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  email;
  constellation;
  textinput;
  nickname;
  name;
  text;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    if (this.authService.messageSource) {
      console.log(this.authService. messageSource);
      this.authService.messageSource.subscribe(message => {
        this.email = message.email;
        this.constellation = message.constellation;
        this.textinput = message.textinput;
        this.nickname = message.nickname;
        // this.name = message.name;
      });
    } else {
      console.log('success!');
    }
    // if (this.authService.signinUser().messageSource) {
    //   this.authService.signinUser().messageSource
    //     .subscribe(message => {
    //       console.log(message.source._value);
    //       this.message = message.source._value;
    //     });
    // } else {
    //   this.message = 'type';
    // }
    // console.log(this.authService.signinUser().messageSource);
  }


}