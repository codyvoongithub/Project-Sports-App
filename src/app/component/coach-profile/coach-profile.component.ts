
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
    console.log("COdy Coach profile",coachId);
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
  const coachID = parseInt(this.getIdFromURL(), 10); // Parse the coach ID as an integer
  console.log("Coach ID :", coachID);
  if (studentID && !isNaN(coachID)) { // Check if coachID is not NaN
    this.auth.join(coachID, +studentID).subscribe(
      response => {
        // Handle successful join response
        console.log(response);
        alert('Success: ' + response.message); // Display success message
      },
      error => {
        // Handle join error
        
        alert('You have already joined this coach :P'); // Display error message
      }
    );
  } else {
    // Handle missing student ID or invalid coach ID
    console.error('Student ID not found or invalid coach ID.');
    alert('Error: Student ID not found or invalid coach ID.');
  }
}



 
}



