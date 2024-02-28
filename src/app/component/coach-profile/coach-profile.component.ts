
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

  constructor(private api: ApiService,private auth: AuthService, private userStore:UserStoreService, private router: Router,private route: ActivatedRoute) { }
  ngOnInit() {
   
    };
    onUpdate() {
      // Retrieve the user ID from the URL
      const userId = this.route.snapshot.paramMap.get('id');
      console.log('User ID:', userId);
      // Redirect to the coach profile component with the user's ID
      this.router.navigate(['/coach-form', userId]);
  }
}
