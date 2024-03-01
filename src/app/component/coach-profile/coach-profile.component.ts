
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { AuthService } from '../../services/auth.service';
import { UserStoreService } from '../../services/user-store.service';
import { ActivatedRoute,Router } from '@angular/router';


@Component({
  selector: 'app-coach-profile',
  templateUrl: './coach-profile.component.html',
  styleUrls: ['./coach-profile.component.css']
})
export class CoachProfileComponent implements OnInit{
  public users:any = [];
  public role!:string;
userId: any;
  
  constructor(private api: ApiService,private auth: AuthService, private userStore:UserStoreService, private router: Router,private route: ActivatedRoute) { }
  
  ngOnInit() {
    
    const coachId = this.route.snapshot.paramMap.get('id');
    
    if (coachId !== null) {
      const userIdNumber = +coachId;
    this.api.getCoachProfile(userIdNumber)
    .subscribe(res =>{
      this.users = res;
      this.logUsers();
    });
  }

  this.userStore.getRoleFromStore()
    .subscribe(val=>{
      const roleFromToken = this.auth.getRoleFromToken();
      this.role = val || roleFromToken;
      console.log('Role:', this.role);
    })

    };
    

    onUpdate() {
      const userId = this.route.snapshot.paramMap.get('id');
      this.router.navigate(['/coach-form', userId]);
  }
  
  logUsers() {
    for (const key in this.users) {
        if (Object.prototype.hasOwnProperty.call(this.users, key)) {
            console.log(key + ':', this.users[key]);
        }
    }
}
getIdFromURL(): string {
  // Logic to extract id from URL, for example:
  const url = window.location.href;
  const idIndex = url.lastIndexOf('/') + 1;
  return url.substring(idIndex);
}

isDropdownVisible(): boolean {
  const idFromURL = this.getIdFromURL();
  const idFromLocalStorage = localStorage.getItem('userID');
  console.log('ID from URL:', idFromURL);
  console.log('ID from Local Storage:', idFromLocalStorage);
  const isVisible = idFromURL === idFromLocalStorage;
  if (isVisible) {
    return true;
  }

  return false;
}
 onView(){
  const userId = this.route.snapshot.paramMap.get('id');
  this.router.navigate(['/students-joined', userId]);
 }

 onJoin() {
  const studentID = localStorage.getItem('userID');
  const idFromURL = this.getIdFromURL();
}
 
}



