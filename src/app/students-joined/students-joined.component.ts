import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { AuthService } from '../services/auth.service';
import { UserStoreService } from '../services/user-store.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-students-joined',
  templateUrl: './students-joined.component.html',
  styleUrls: ['./students-joined.component.css']
})
export class StudentsJoinedComponent implements OnInit{
  public users:any = [];
  constructor(private api: ApiService,private auth: AuthService, private userStore:UserStoreService, private router: Router,private route: ActivatedRoute) { }
  
  ngOnInit() {
      const coachId = this.route.snapshot.paramMap.get('userId');
      console.log("COdy im here", coachId);
      if (coachId !== null) {
        const userIdNumber = +coachId;
      this.api.getJoinedStudents(userIdNumber)
      .subscribe(res =>{
        this.users = res;
        this.logUsers();
      });
      } 
  }

  logUsers() {
    for (const key in this.users) {
        if (Object.prototype.hasOwnProperty.call(this.users, key)) {
            console.log(key + ':', this.users[key]);
        }
    }
}


removeStudent(userId:number){
  this.auth.removeStudent(userId)
  .subscribe(
    ()=>{
      console.log('User deleted successfully');
      window.location.reload();
    },
    (error)=>{
      console.error('Error deleting user:',error);
    }
  )
}
}