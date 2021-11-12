import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {
  persons:string[]=[];

  name:string="";
  age:string="";

  constructor() { 
    this.persons.push("Jeba || 43");
    this.persons.push("Reka || 43");
    this.persons.push("Raji || 33");
   
   

  }
  onDelete(val){
    this.persons.forEach((element,index)=>{
      if(element==val) this.persons.splice(index,1);
   });
  }
  ngOnInit(): void {
  }

}
