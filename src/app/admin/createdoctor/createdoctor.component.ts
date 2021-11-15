import { Component, OnInit } from '@angular/core';
import {doctors} from '../../../app/model';

@Component({
  selector: 'app-createdoctor',
  templateUrl: './createdoctor.component.html',
  styleUrls: ['./createdoctor.component.css']
})
export class CreatedoctorComponent implements OnInit {

  persons:doctors[]=[
    {
     names:"jenila",
     age:23,
     gender:"F",
     edu:"mbbs",
     reg:"sdfjk457678",
     add:"chennai"
    }
  ]
  display:boolean=false;
 
  resetdata:boolean=false;
  branch=["Staff nurse","Ward boy","Ambulance driver","Duty nurse","op nurse"];

  doctor:string[]=[];
  
  dname:string="";
  dno:string="";
  constructor() { 
    
    // this.doctor.push("Ann    - 55523");
    // this.doctor.push("Abdul  - 45553");
    // this.doctor.push("Joshua - 35553");
   

  }
  
  onview(){
   
    this.display=true;
     
   }
   onadd(formdetail){
     
     this.persons.push(formdetail.value)
     
     formdetail.reset()
     console.log("person",this.persons)   
   }
   onDelete(val){
     this.persons.forEach((element,index)=>{
       if(element==val) this.persons.splice(index,1);
    });
   }
   onCloseClick() {
     this.display = false;
   }

  ngOnInit(): void {
  }

}
