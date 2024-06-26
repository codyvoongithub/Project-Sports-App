import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl : string = "https://localhost:7191/api/User/"
  
  constructor(private http:HttpClient) { }

getUsers(){
  return this.http.get<any>(this.baseUrl);
}

getCoachProfile(userId: number){
  return this.http.get<any>(`${this.baseUrl}coach-profile/${userId}`);
}

getJoinedStudents(userId:number){
  return this.http.get<any>(`${this.baseUrl}students-joined/${userId}`);
}



}
