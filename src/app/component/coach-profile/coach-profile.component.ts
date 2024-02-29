
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
  
  constructor(private api: ApiService,private auth: AuthService, private userStore:UserStoreService, private router: Router,private route: ActivatedRoute) { }
  
  ngOnInit() {
    
    const userId = this.route.snapshot.paramMap.get('id');
    if (userId !== null) {
      const userIdNumber = +userId;
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
      console.log('User ID:', userId);
      
      this.router.navigate(['/coach-form', userId]);
  }
  logUsers() {
    for (const key in this.users) {
        if (Object.prototype.hasOwnProperty.call(this.users, key)) {
            console.log(key + ':', this.users[key]);
        }
    }
}
  
}



