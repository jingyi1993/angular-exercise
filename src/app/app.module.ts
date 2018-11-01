import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';


import { SuccessAlertComponent } from './success-alert/success-alert.component';
import {ServersComponent} from './servers/servers.component';
import {ServerComponent} from './server/server.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import {AuthService} from './auth/auth.service';



@NgModule({
  declarations: [
    AppComponent,
    SuccessAlertComponent,
    ServerComponent,
    ServersComponent,
    SignupComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
