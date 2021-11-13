import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import model from '../../../app/model';

@Component({
  selector: 'app-createstaff',
  templateUrl: './createstaff.component.html',
  styleUrls: ['./createstaff.component.css']
})
export class CreatestaffComponent implements OnInit {


  persons:model[]=[
    {
    branch:"Staff nurse",
     names:"jenila",
     age:23,
     flexRadioDefault1:"F",
     edu:"mbbs",
     add:"chennai"
    }
  ]
  display:boolean=false;
 
  resetdata:boolean=false;
  branch=["Staff nurse","Ward boy","Ambulance driver","Duty nurse","op nurse"];


  constructor() { 
   
    // this.persons.push("Reena - Staff nurse");
    // this.persons.push("Rana - op nurse");
    // this.persons.push("Ravi  - Ambulance driver");
   
   

  }
  onsubmit(formdetail){
    // this.persons.push(this.name +"-"+ this.branch[val]);
    
    console.log(formdetail.value)
    
  }
  onview(){
   
   this.display=true;
    
  }
  onadd(formdetail){
    // this.persons.push(formdetail.value.names +"-"+ formdetail.value.branch);
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
