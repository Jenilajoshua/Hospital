import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-createstaff',
  templateUrl: './createstaff.component.html',
  styleUrls: ['./createstaff.component.css']
})
export class CreatestaffComponent implements OnInit {


  

  persons:string[]=[];

  name:string="";
  age:string="";

  constructor() { 
    this.persons.push("Reena - 43");
    this.persons.push("Reena - 43");
    this.persons.push("Ravi  - 33");
   
   

  }
  onClick(){
    this.persons.push(this.name +"-"+ this.age);
    
  }
  




  ngOnInit(): void {
  }

}
