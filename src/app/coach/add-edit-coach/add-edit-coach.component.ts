import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
@Component({
  selector: 'app-add-edit-coach',
  templateUrl: './add-edit-coach.component.html',
  styleUrls: ['./add-edit-coach.component.css']
})
export class AddEditCoachComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() coach:any;
  CoachId:string | undefined;
  CoachName:string | undefined;

  ngOnInit(): void {
    this.CoachId=this.coach.CoachId;
    this.CoachName=this.coach.CoachName;
  }

  addCoach(){
    var val={CoachId:this.CoachId,
            CoachName:this.CoachName};
            this.service.addCoach(val).subscribe(res=>{
              alert(res.toString());
            });
  }

  updateCoach(){
    var val={CoachId:this.CoachId,
      CoachName:this.CoachName};
      this.service.updateCoach(val).subscribe(res=>{
        alert(res.toString());
      });
  }
}
