import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-badminton',
  templateUrl: './badminton.component.html',
  styleUrls: ['./badminton.component.css']
})
export class BadmintonComponent implements OnInit{
  ngOnInit(): void {
    
  }

  activeTab:string = 'Personal Details';
  onTabClick(tab: string){
    this.activeTab = tab;
  }
}
