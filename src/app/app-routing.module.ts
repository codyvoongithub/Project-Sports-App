import { importProvidersFrom, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CoachComponent } from './coach/coach.component';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

import { SoccerComponent } from './soccer/soccer.component';
import { StudentComponent } from './student/student.component';



const routes: Routes = [
  {path:'coach',component:CoachComponent},
  {path:'student',component:StudentComponent},
  {path:'Home', component:HomeComponent},
  {path:'Soccer',component:SoccerComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
