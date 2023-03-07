import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
  }

  bgVariable:boolean = false;
  headerVariable:boolean = false;
  @HostListener('document:scroll')
  onScroll(){
    if(document.body.scrollTop > 60 || document.documentElement.scrollTop >60){
      this.bgVariable =true;
    }else{
      this.bgVariable =false;
    }
  }
}
