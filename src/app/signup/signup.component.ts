import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import ValidateForm from 'src/helpers/validateforms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{

  signupForm!:FormGroup;
  constructor(private fb:FormBuilder, private auth:AuthService, private router : Router){

  }

  ngOnInit(): void{
    this.signupForm = this.fb.group({
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      userName:['',Validators.required],
      email:['',Validators.required],
      password:['',Validators.required],
    })
  }

  onSignUp(){
    
    if(this.signupForm.valid){
     this.auth.signUp(this.signupForm.value)
     .subscribe({
      next:(res =>{
        alert(res.message);
        this.signupForm.reset();
        this.router.navigate(['login']);
      }),
      error:(err =>{
        alert(err?.error.message)
      })
     })




      
    }else{
       ValidateForm.validateAllFormFields(this.signupForm)
    }
  }



  
}



