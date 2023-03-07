import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-soccer',
  templateUrl: './soccer.component.html',
  styleUrls: ['./soccer.component.css']
})

export class SoccerComponent implements OnInit{
  constructor() { }

  ngOnInit(): void {
  }
  
  activeTab:string = 'Personal Details';
  onTabClick(tab: string){
    this.activeTab = tab;
  }

}
