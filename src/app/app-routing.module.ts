import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StaffComponent } from './staff/staff.component';
import { AdminComponent } from './admin/admin.component';
import { DoctorComponent } from './doctor/doctor.component';
import { HomeComponent } from './home/home.component';
import {CreatedoctorComponent} from './admin/createdoctor/createdoctor.component';
import {CreatestaffComponent} from './admin/createstaff/createstaff.component';

const routs:Routes=[
  {path:'',component:HomeComponent},
  {path:'admin',component:AdminComponent},
  {path:'doctor',component:DoctorComponent},
  {path:'staff',component:StaffComponent},
  {path:'createdoctor',component:CreatedoctorComponent},
  {path:'createstaff',component:CreatestaffComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routs)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
