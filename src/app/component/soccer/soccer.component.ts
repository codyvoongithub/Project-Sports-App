import { DeclareVarStmt } from '@angular/compiler';
import { Component, HostListener, OnInit } from '@angular/core';

declare const script: any;
@Component({
  selector: 'app-soccer',
  templateUrl: './soccer.component.html',
  styleUrls: ['./soccer.component.css']
})

export class SoccerComponent implements OnInit{

  myScriptElement:HTMLScriptElement;

  constructor() { 
    this.myScriptElement = document.createElement("script");
    this.myScriptElement.src = "src/assets/script.js";
    document.body.appendChild(this.myScriptElement);
  }

  ngOnInit(): void {
  }
  
  
  
  activeTab:string = 'Personal Details';
  onTabClick(tab: string){
    this.activeTab = tab;
  }

}
