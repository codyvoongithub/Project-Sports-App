import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserStoreService {
private fullName$ = new BehaviorSubject<string>("");
private role$ = new BehaviorSubject<string>("");
private userid$ = new BehaviorSubject<number>(0);

  constructor(private http:HttpClient) { }
  public getRoleFromStore(){
    return this.role$.asObservable();
  }

  public setRoleForStore(role:string){
    this.role$.next(role);
  }
  public getFullNameFromStore(){
     return this.fullName$.asObservable();
  }
  public setFullNameForStore(fullname:string){
    this.fullName$.next(fullname);
  }
  
}
