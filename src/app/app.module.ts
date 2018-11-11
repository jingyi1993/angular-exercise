import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {ServersComponent} from './servers/servers.component';
import {ServerComponent} from './server/server.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import {AuthService} from './auth/auth.service';
import { HeaderComponent } from './header/header.component';
import {DropdownDirective} from './shared/dropdown.directive';
import { ProfileComponent } from './profile/profile.component';
import { PersonalWebsiteComponent } from './personal-website/personal-website.component';
import { LoadingSpinnerComponent } from './ui/loading-spinner/loading-spinner.component';


@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    SignupComponent,
    SigninComponent,
    HeaderComponent,
    DropdownDirective,
    ProfileComponent,
    PersonalWebsiteComponent,
    LoadingSpinnerComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path: '' , component: SigninComponent},
      {path: 'signin' , component: SigninComponent},
      {path: 'signup' , component: SignupComponent},
      {path: 'profile' , component: ProfileComponent},
      {path: 'website', component: PersonalWebsiteComponent},
    ])
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
