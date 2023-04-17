import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators,FormBuilder } from '@angular/forms';
import { ResetPassword } from '../models/reset-password.model';
import { ConfirmPasswordValidator } from 'src/helpers/confirm-password.validator';
import { ActivatedRoute, Router } from '@angular/router';
import ValidateForm from 'src/helpers/validateforms';
import { ResetPasswordService } from '../services/reset-password.service';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit{
  
  

  resetPasswordForm!:FormGroup;
  emailToReset!: string;
  emailToken!:string;
  resetPasswordObj = new ResetPassword();

  constructor(private fb: FormBuilder, private activatedRoute :ActivatedRoute, private resetService: ResetPasswordService,
    private router: Router){}

  ngOnInit(): void {
    this.resetPasswordForm = this.fb.group({
      password : [null,Validators.required],
      confirmPassword : [null, Validators.required],
    },{
      validator: ConfirmPasswordValidator("password","confirmPassword")
    });

    this.activatedRoute.queryParams.subscribe(val=>{
      this.emailToReset = val['email'];
      let uriToken = val['code'];

      this.emailToken = uriToken.replace(/ /g,'+');
      console.log(this.emailToken);
      console.log(this.emailToReset);
    })
  }

  reset(){
    if(this.resetPasswordForm.valid){
      this.resetPasswordObj.email = this.emailToReset;
      this.resetPasswordObj.newPassword = this.resetPasswordForm.value.password;
      this.resetPasswordObj.confirmPassword = this.resetPasswordForm.value.confirmPassword;
      this.resetPasswordObj.emailToken = this.emailToken;

      this.resetService.resetPassword(this.resetPasswordObj)
      .subscribe({
        next:(res)=>{
          alert("Success")
          this.router.navigate(['/'])
        },
        error:(err)=>{
          alert("Error")
        }
      });
    }else{
      ValidateForm.validateAllFormFields(this.resetPasswordForm);
    }
  }

}
