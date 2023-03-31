import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { AuthService } from '../services/auth.service';
import { UserStoreService } from '../services/user-store.service';

@Component({
  selector: 'app-coach',
  templateUrl: './coach.component.html',
  styleUrls: ['./coach.component.css']
})
export class CoachComponent implements OnInit {

  public users:any = [];
  public fullName: string = "";
  constructor(private api: ApiService,private auth: AuthService, private userStore:UserStoreService) { }

  ngOnInit() {
    this.api.getUsers()
    .subscribe(res =>{
      this.users = res;
    });

    this.userStore.getFullNameFromStore()
    .subscribe(val =>{
      let fullNameFromToken = this.auth.getfullNameFromToken();
      this.fullName = val || fullNameFromToken
    })


  }

}
