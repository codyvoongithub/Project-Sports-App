import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import ValidateForm from 'src/helpers/validateforms';
import { AuthService } from '../services/auth.service';
import { ResetPasswordService } from '../services/reset-password.service';
import { UserStoreService } from '../services/user-store.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{


    loginForm!:FormGroup;
    public resetPasswordEmail!:string;
    public isValidEmail!:boolean;
    constructor(private fb:FormBuilder, 
      private auth:AuthService,
      private router :Router, 
      private userStore :UserStoreService,
      private resetService :ResetPasswordService){

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
            console.log(res.message);
            alert(res.message);
            this.loginForm.reset();
            this.auth.storeToken(res.accessToken);
            this.auth.storeRefreshToken(res.refreshToken);
            const tokenPayload = this.auth.decodedToken();
            this.userStore.setFullNameForStore(tokenPayload.unique_name);
            this.userStore.setRoleForStore(tokenPayload.role);
            this.router.navigate(['Home']);
          },
          error:(err)=>{
            alert(err?.error.message)
            console.log(err)
          }
        })
      } else {
        
        ValidateForm.validateAllFormFields(this.loginForm);
        alert("Your form is invalid")

      }
    }

    checkValidEmail(event: string){
      const value = event;
      const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      this.isValidEmail = pattern.test(value);
      return this.isValidEmail;
    }

    confirmToSend(){
      if(this.checkValidEmail(this.resetPasswordEmail)){
        console.log(this.resetPasswordEmail);
   

        this.resetService.sendResetPasswordLink(this.resetPasswordEmail)
        .subscribe({
          next:(res) =>{
            alert('Reset is Succesful')
        this.resetPasswordEmail = "";
        const buttonRef = document.getElementById("closeBtn");
        buttonRef?.click();
          },
          error:(err) =>{
            alert("Something went wrong");
          }
        })
      }
    }


}
