import { Component, OnInit,Input } from '@angular/core';
 
@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {

  persons:string[]=[];

  @Input() name:string="";
  @Input() age:string="";

  constructor() { 
    this.persons.push("Jeba || 43");
    this.persons.push("Reka || 43");
    this.persons.push("Raji || 33");
   
   

  }
  onClick(){
    this.persons.push(this.name +"||"+ this.age);
    
  }

  ngOnInit(): void {
  }

}
