import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _router: Router,private _activatedRoutes:ActivatedRoute) { }
user:string='';
  selectChangeHandler(event:any){
    this.user=event.target.value;

  if (this.user=="1"){
    this._router.navigateByUrl('/doctor');
    }
    else if(this.user=="2"){
      this._router.navigateByUrl('/admin');
    }
    else{
      this._router.navigateByUrl('/staff');
     
    }}
  // onClick(){
    // let user=value;
  
    // console.log(user);
    // this._router.navigateByUrl('/doctor');
   
    // if (user=="1"){
    // this._router.navigateByUrl('/doctor');
    // }
    // else if(user=="2"){
    //   this._router.navigateByUrl('/staff');
    // }
    // else{
    //   this._router.navigateByUrl('/admin');
     
    // }

  ngOnInit(): void {
  }

}
