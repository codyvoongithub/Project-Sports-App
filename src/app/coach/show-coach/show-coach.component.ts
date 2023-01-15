import { Component, importProvidersFrom, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';


@Component({
  selector: 'app-show-coach',
  templateUrl: './show-coach.component.html',
  styleUrls: ['./show-coach.component.css']
})
export class ShowCoachComponent implements OnInit {

  constructor(private service:SharedService) { }

  CoachList:any=[];
  ModalTitle:string | undefined;
  ActivateAddEditCoachComp:boolean=false;
  coach:any;
  ngOnInit(): void {
    this.refreshCoachList();
  }

  addClick(){
    this.coach={
      CoachId:0,
      CoachName:""
    }
    this.ModalTitle="Add Coach";
    this.ActivateAddEditCoachComp=true;
  }

  editClick(item: any){
    this.coach=item;
    this.ModalTitle="Edit Department";
    this.ActivateAddEditCoachComp=true;
  }

  closeClick(){
    this.ActivateAddEditCoachComp=false;
    this.refreshCoachList();

  }

  refreshCoachList(){
    this.service.getCoachList().subscribe(data=>{
      this.CoachList=data;
    });





  }

}
