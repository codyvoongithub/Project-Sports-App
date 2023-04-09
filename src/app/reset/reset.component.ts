import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators,FormBuilder } from '@angular/forms';
import { ResetPassword } from '../models/reset-password.model';
import { ConfirmPasswordValidator } from 'src/helpers/confirm-password.validator';

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

  constructor(private fb: FormBuilder){}

  ngOnInit(): void {
    this.resetPasswordForm = this.fb.group({
      password : [null,Validators.required],
      confirmPassword : [null, Validators.required]
    },{
      validator: ConfirmPasswordValidator("password","confirmPassword")
    });

  }


}
