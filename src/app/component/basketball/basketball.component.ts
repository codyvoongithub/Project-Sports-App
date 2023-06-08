import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basketball',
  templateUrl: './basketball.component.html',
  styleUrls: ['./basketball.component.css']
})
export class BasketballComponent implements OnInit{
  

  
  ngOnInit(): void {
    
  }

  activeTab:string = 'Personal Details';
  onTabClick(tab: string){
    this.activeTab = tab;
  }
}
