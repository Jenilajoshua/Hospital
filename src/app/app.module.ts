import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StaffComponent } from './staff/staff.component';
import { AdminComponent } from './admin/admin.component';
import { DoctorComponent } from './doctor/doctor.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CreatestaffComponent } from './admin/createstaff/createstaff.component';
import { CreatedoctorComponent } from './admin/createdoctor/createdoctor.component';




@NgModule({
  declarations: [
    AppComponent,
    StaffComponent,
    AdminComponent,
    DoctorComponent,
    HomeComponent,
    LoginComponent,
    CreatestaffComponent,
    CreatedoctorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
   
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
