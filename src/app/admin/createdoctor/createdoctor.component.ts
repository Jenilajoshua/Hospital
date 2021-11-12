import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-createdoctor',
  templateUrl: './createdoctor.component.html',
  styleUrls: ['./createdoctor.component.css']
})
export class CreatedoctorComponent implements OnInit {

  doctor:string[]=[];
  
  dname:string="";
  dno:string="";
  constructor() { 
    
    this.doctor.push("Ann    - 55523");
    this.doctor.push("Abdul  - 45553");
    this.doctor.push("Joshua - 35553");
   

  }
  
  onAdd(){
    this.doctor.push(this.dname + "-" + this.dno);
  }
  onDelete(val){
    this.doctor.forEach((element,index)=>{
      if(element==val) this.doctor.splice(index,1);
   });
  }

  ngOnInit(): void {
  }

}
