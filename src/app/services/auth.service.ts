import { Injectable } from '@angular/core';
import{HttpClient}from "@angular/common/http";
import { Router } from '@angular/router';
import{ JwtHelperService}from '@auth0/angular-jwt'
import { TokenApiModel } from '../models/token-api.model';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl:string="https://localhost:7191/api/User/";
  private userPayload:any;
  constructor(private http : HttpClient, private router : Router) {
    this.userPayload = this.decodedToken();
     }

  signUp(userObj:any){
    return this.http.post<any>(`${this.baseUrl}register`,userObj);
  }
  
  login(loginObj:any){
    return this.http.post<any>(`${this.baseUrl}authenticate`,loginObj);
  }

  signOut(){
    localStorage.clear();
    this.router.navigate(['login'])
  }


  storeToken(tokenValue: string){
    localStorage.setItem('token',tokenValue);
  } 

  storeRefreshToken(tokenValue: string){
    localStorage.setItem('refreshToken',tokenValue);
  }

  getToken(){
    return localStorage.getItem('token');
  }

  getRefreshToken(){
    return localStorage.getItem('refreshToken');
  }

  isLoggedIn():boolean{
    return !!localStorage.getItem('token');
  }

  decodedToken(){
    const jwtHelper=  new JwtHelperService();
    const token = this.getToken()!;
    console.log(jwtHelper.decodeToken(token))
    return jwtHelper.decodeToken(token)
  }

  getfullNameFromToken(){
    if(this.userPayload){
      return this.userPayload.unique_name;
    }
  }

  getRoleFromToken(){
    if(this.userPayload){
      return this.userPayload.role;
    }
  }

  
 
  renewToken(tokenApi : TokenApiModel){
    return this.http.post<any>(`${this.baseUrl}refresh`,tokenApi)
  }

  delete(userId: number) {
    return this.http.delete<any>(`${this.baseUrl}delete/${userId}`);
  }

  removeStudent(userId: number) {
    return this.http.delete<any>(`${this.baseUrl}students-remove/${userId}`);
  }

  update(userId: number, updatedData: any) {
    return this.http.post<any>(`${this.baseUrl}update-coach-profile/${userId}`, updatedData);
  }
  
  join(userId: number, userId2: number) {
    return this.http.post<any>(`${this.baseUrl}student-joining/${userId}`, { CoachID: userId, StudentId: userId2 });
  }
  
}
