import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import ValidateForm from 'src/helpers/validateforms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{


    loginForm!:FormGroup;
    constructor(private fb:FormBuilder, private auth:AuthService,private router :Router){

    }

    ngOnInit(): void {
      this.loginForm = this.fb.group({
        username:['',Validators.required],
        password:['',Validators.required]
      })
    }

    onLogin(){
      if(this.loginForm.valid){
        console.log(this.loginForm.value)
        this.auth.login(this.loginForm.value)
        .subscribe({
          next:(res)=>{
            alert(res.message);
            this.loginForm.reset();
            this.router.navigate(['Home']);
          },
          error:(err)=>{
            alert(err?.err.message)
          }
        })
      }else{
        
        ValidateForm.validateAllFormFields(this.loginForm);
        alert("Your form is invalid")

      }
    }

    



}
