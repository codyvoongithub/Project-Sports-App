import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-volleyball',
  templateUrl: './volleyball.component.html',
  styleUrls: ['./volleyball.component.css']
})
export class VolleyballComponent implements OnInit{
  ngOnInit(): void {
  
  }
  activeTab:string = 'Personal Details';
  onTabClick(tab: string){
    this.activeTab = tab;
  }
}
