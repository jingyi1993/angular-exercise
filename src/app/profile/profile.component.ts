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
  linkedin;
  git;
  signinAlert: string = 'false';


  constructor(private authService: AuthService) { }

  ngOnInit() {
    if (this.authService.messageSource ) {
      console.log('2' + this.authService.messageSource);
      this.authService.messageSource.subscribe(message => {
        this.email = message.email;
        this.constellation = message.constellation;
        this.textinput = message.textinput;
        this.nickname = message.nickname;
        this.linkedin = message.linkedin;
        this.git = message.git;
      });
    } else {
      console.log('33333');
      this.signinAlert = 'true';
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
