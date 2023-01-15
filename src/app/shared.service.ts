import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl="http://localhost:5000/api";
  
  constructor(private http:HttpClient) { }

    //Coach
    getCoachList():Observable<any[]>{
      return this.http.get<any>(this.APIUrl+'/Coach');
    }

    addCoach(val:any){
      return this.http.post(this.APIUrl+'/Coach',val);
    }

    updateCoach(val:any){
      return this.http.put(this.APIUrl+'/Coach',val);
    }
    
    deleteCoach(val:any){
      return this.http.delete(this.APIUrl+'/Coach/'+val);
    }

    //Student
    getStudentList():Observable<any[]>{
      return this.http.get<any>(this.APIUrl+'/Student');
    }

    addStudent(val:any){
      return this.http.post(this.APIUrl+'/Student',val);
    }

    updateStudent(val:any){
      return this.http.put(this.APIUrl+'/Student',val);
    }
    
    deleteStudent(val:any){
      return this.http.delete(this.APIUrl+'/Student/'+val);
    }

    
    getAllCoachNames():Observable<any[]>{
      return this.http.get<any[]>(this.APIUrl+'/Student/GetAllCoachNames');
    }

}
