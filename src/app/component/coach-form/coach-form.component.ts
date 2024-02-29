import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { AuthService } from '../../services/auth.service';
import { UserStoreService } from '../../services/user-store.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-coach-form',
  templateUrl: './coach-form.component.html',
  styleUrls: ['./coach-form.component.css']
})
export class CoachFormComponent implements OnInit {

  public users: any = [];
  public fullName: string = "";
  public role!: string;
  updateForm!: FormGroup;

  constructor(
    private fb: FormBuilder, 
    private api: ApiService,
    private auth: AuthService, 
    private userStore: UserStoreService, 
    private router: Router,
    private toast: NgToastService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.updateForm = this.fb.group({
      description: [' '], // Default description
      achievements: [' '], // Default achievements
        address: [' '], // Default address
        price: [0] // Default price
    });
   

    

    this.userStore.getFullNameFromStore()
      .subscribe(val => {
        let fullNameFromToken = this.auth.getfullNameFromToken();
        this.fullName = val || fullNameFromToken;
      });
  }

  onSubmit() {
    if (this.updateForm.valid) {
      const userId = this.route.snapshot.params['userId']; 
      
      const updatedData = this.updateForm.value;
      
      this.auth.update(userId, updatedData)
        .subscribe({
          next: (res) => {
            
            this.toast.success({ detail: "Success", summary: res.message, duration: 5000 });
            this.updateForm.reset();
            this.router.navigate(['coach-profile', userId]);
          },
          error: (err) => {
            alert(err?.error?.message);
            // Handle error as needed
          }
        });
    }
  }
}
