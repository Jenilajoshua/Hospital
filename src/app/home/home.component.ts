import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _router: Router,private _activatedRoutes:ActivatedRoute) { }
  
  onClick(){
    // let user=(<HTMLSelectElement>document.getElementById('all')).value;
    this._router.navigate(['doctor'],{relativeTo:this._activatedRoutes});
   
    // if (user=='1'){
    // this._router.navigate(['doctor']);
    // }
    // else if(user=='2'){
    //   this._router.navigateByUrl('/admin');
    // }
    // else{
    //    this._router.navigateByUrl('/staff');
     
    // }
  }

  ngOnInit(): void {
  }

}
