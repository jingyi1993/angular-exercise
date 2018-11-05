import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';


import { SuccessAlertComponent } from './success-alert/success-alert.component';
import {ServersComponent} from './servers/servers.component';
import {ServerComponent} from './server/server.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import {AuthService} from './auth/auth.service';
import { HeaderComponent } from './header/header.component';
import {DropdownDirective} from './shared/dropdown.directive';


@NgModule({
  declarations: [
    AppComponent,
    SuccessAlertComponent,
    ServerComponent,
    ServersComponent,
    SignupComponent,
    SigninComponent,
    HeaderComponent,
    DropdownDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path: '' , component: ServersComponent},
      {path: 'signin' , component: SigninComponent},
      {path: 'signup' , component: SignupComponent}
    ])
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
