import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  persons:string[]=[];
  doctor:string[]=[];
  name:string="";
  age:string="";
  dname:string="";
  dage:string="";
  constructor() { 
    this.persons.push("Reena - 43");
    this.persons.push("Reena - 43");
    this.persons.push("Ravi  - 33");
    this.doctor.push("Ann    - 23");
    this.doctor.push("Abdul  - 43");
    this.doctor.push("Joshua - 33");
   

  }
  onClick(){
    this.persons.push(this.name +"-"+ this.age);
    
  }
  onAdd(){
    this.doctor.push(this.dname + "-" + this.dage);
  }
  // onDelete(dname:string): void {

  //     this.doctor = this.doctor.filter(item => item != this.dname);
  // }

  ngOnInit(): void {
  }

}
