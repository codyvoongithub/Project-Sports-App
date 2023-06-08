import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoachComponent } from './coach/coach.component';





import{HttpClientModule, HTTP_INTERCEPTORS}from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';



import { SoccerComponent } from './component/soccer/soccer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { BasketballComponent } from './component/basketball/basketball.component';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { CommonModule } from '@angular/common';
import { ResetComponent } from './reset/reset.component';
import { BadmintonComponent } from './component/badminton/badminton.component';
import { VolleyballComponent } from './component/volleyball/volleyball.component';
import { CoachProfileComponent } from './component/coach-profile/coach-profile.component';




@NgModule({
  declarations: [
    AppComponent,
    CoachComponent,

    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SoccerComponent,
    LoginComponent,
    SignupComponent,
    BasketballComponent,
    ResetComponent,
    BadmintonComponent,
    VolleyballComponent,
    CoachProfileComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CommonModule, 
    
  ],
  providers: [{
  provide:HTTP_INTERCEPTORS,
  useClass:TokenInterceptor,
  multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
