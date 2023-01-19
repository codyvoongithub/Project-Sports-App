import { importProvidersFrom, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CoachComponent } from './coach/coach.component';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { StudentComponent } from './student/student.component';



const routes: Routes = [
  {path:'coach',component:CoachComponent,canActivate:[AuthGuard]},
  {path:'student',component:StudentComponent,canActivate:[AuthGuard]},
  {path:'Home', component:HomeComponent,canActivate:[AuthGuard]},
  {path:'',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
