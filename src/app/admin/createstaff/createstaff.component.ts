import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-createstaff',
  templateUrl: './createstaff.component.html',
  styleUrls: ['./createstaff.component.css']
})
export class CreatestaffComponent implements OnInit {

  // for:FormGroup=new FormGroup({
    
  // })
  
  
  persons:string[]=[];

  name:string="";
  age:string="";
  branch=["Staff nurse","Ward boy","Ambulance driver","Duty nurse","op nurse"];


  constructor() { 
   
    this.persons.push("Reena - Staff nurse");
    this.persons.push("Rana - op nurse");
    this.persons.push("Ravi  - Ambulance driver");
   
   

  }
  onClick(val){
    this.persons.push(this.name +"-"+ this.branch[val]);
    
    
    
  }
  onview(formdetail){
   alert(formdetail.value)
  }
  
  onDelete(val){
    this.persons.forEach((element,index)=>{
      if(element==val) this.persons.splice(index,1);
   });
  }



  ngOnInit(): void {
  }

}
