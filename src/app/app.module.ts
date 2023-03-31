import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoachComponent } from './coach/coach.component';

import { StudentComponent } from './student/student.component';



import{HttpClientModule, HTTP_INTERCEPTORS}from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';



import { SoccerComponent } from './soccer/soccer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { BasketballComponent } from './basketball/basketball.component';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    AppComponent,
    CoachComponent,
    StudentComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SoccerComponent,
    LoginComponent,
    SignupComponent,
    BasketballComponent
    
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
