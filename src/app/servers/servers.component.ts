import { Component, OnInit } from '@angular/core';
import {isStringLiteralLike} from 'codelyzer/util/utils';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})

export class ServersComponent {
  usernameCreated = false;
  UserCreationStatus: string = 'no server was created!';
  username = '';

  constructor() {
  }
  ngOnInit() {
  }

  onCreateUesername () {
    this.usernameCreated = true;
    this.UserCreationStatus = 'User was created!';
  }


  emptyUsername () {
    this.username = '';
  }
  }




