import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { FormsModule} from '@angular/forms';

import { AngularFireModule } from 'angularfire2';
import {AngularFireDatabase} from 'angularfire2/database';
import {AngularFireAuth, AngularFireAuthModule} from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EmployeeInfoComponent } from './components/employee-info/employee-info.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { EditEmployeeComponent } from './components/edit-employee/edit-employee.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SettingsComponent } from './components/settings/settings.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

import {EmployeeService} from './services/employee.service';
import { EmployeesComponent } from './components/employees/employees.component';

export const firebaseConfig = {
  apiKey: "AIzaSyDPSjJ6H1ZdKU1W2u1wFNF53Uyoi6BCw1Q",
    authDomain: "employeemanagement-40b14.firebaseapp.com",
    databaseURL: "https://employeemanagement-40b14.firebaseio.com",
    storageBucket: "employeemanagement-40b14.appspot.com",
    messagingSenderId: "132182712751"
};

const appRoutes:Routes=[
  {path:'',component:DashboardComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:"add-employee",component:AddEmployeeComponent},
  {path:"employee/:id",component:EmployeeInfoComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    EmployeeInfoComponent,
    AddEmployeeComponent,
    EditEmployeeComponent,
    NavbarComponent,
    SidebarComponent,
    LoginComponent,
    RegisterComponent,
    SettingsComponent,
    PageNotFoundComponent,
    EmployeesComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [
    AngularFireDatabase,
    AngularFireAuth,
    EmployeeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
