import { Component, OnInit,Input, ViewChild } from '@angular/core';
import { patients } from '../model';
import { StaffComponent } from '../staff/staff.component';
@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {
  persons:string[]=[];
  display:boolean=false;
  name:string="welcom";
  age:string="";

  patient:patients[]=[
    {
     names:"jenila",
     age:23,
     gender:"F",
     diag:"Dialysis",
     add:"chennai"
    }
  ]
  constructor() { 
    // this.persons.push("Jeba || 43");
    // this.persons.push("Reka || 43");
    // this.persons.push("Raji || 33");
  
  

  }
 
  onview(){
    this.display=true;
  }
  onCloseClick(){
    this.display=false
  }
  onDelete(val){
    this.persons.forEach((element,index)=>{
      if(element==val) this.persons.splice(index,1);
   });
  }
  ngOnInit(): void {
  }

}


