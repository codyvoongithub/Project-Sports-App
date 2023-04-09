import { importProvidersFrom, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasketballComponent } from './basketball/basketball.component';

import { CoachComponent } from './coach/coach.component';
import { AuthGuard } from './guards/auth.guard';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

import { SoccerComponent } from './soccer/soccer.component';
import { StudentComponent } from './student/student.component';
import { ResetComponent } from './reset/reset.component';



const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'coach',component:CoachComponent},
  {path:'student',component:StudentComponent},
  {path:'Home', component:HomeComponent, canActivate:[AuthGuard]},
  {path:'Soccer',component:SoccerComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent },
  {path:'basketball',component:BasketballComponent},
  {path:'reset',component:ResetComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
