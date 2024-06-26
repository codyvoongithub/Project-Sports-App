import { importProvidersFrom, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasketballComponent } from './component/basketball/basketball.component';

import { CoachComponent } from './component/coach/coach.component';
import { AuthGuard } from './guards/auth.guard';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

import { SoccerComponent } from './component/soccer/soccer.component';

import { ResetComponent } from './reset/reset.component';
import { BadmintonComponent } from './component/badminton/badminton.component';
import { VolleyballComponent } from './component/volleyball/volleyball.component';
import { CoachProfileComponent } from './component/coach-profile/coach-profile.component';
import { CoachFormComponent } from './component/coach-form/coach-form.component';
import { StudentsJoinedComponent } from './students-joined/students-joined.component';

//canActivate:[AuthGuard]

const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'coach',component:CoachComponent},
  {path:'Home', component:HomeComponent},
  {path:'Soccer',component:SoccerComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent },
  {path:'basketball',component:BasketballComponent},
  {path:'reset',component:ResetComponent},
  {path:'badminton',component:BadmintonComponent},
  {path:'volleyball',component:VolleyballComponent},
  {path:'coach-profile/:id',component:CoachProfileComponent},
  {path:'coach-form/:userId',component:CoachFormComponent},
  {path:'students-joined/:userId',component:StudentsJoinedComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
