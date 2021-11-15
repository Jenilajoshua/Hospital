import { Component, OnInit,Input } from '@angular/core';
import { patients} from '../model';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {

patient:patients[]=[
    {
     names:"jenila",
     age:23,
     gender:"F",
     diag:"Dialysis",
     add:"chennai"
    }
  ]
  display:boolean=false;
  persons:string[]=[];

  // @Input() name:string="";
  // @Input() age:string="";

  constructor() {   
   
 
  }
  onview(){
   
    this.display=true;
     
   }
   onadd(formdetail){
     
     this.patient.push(formdetail.value)
     
     formdetail.reset()
     
   }
   onDelete(val){
     this.patient.forEach((element,index)=>{
       if(element==val) this.patient.splice(index,1);
    });
   }
   onCloseClick() {
     this.display = false;
   }
 
  ngOnInit(): void {
  }

}

