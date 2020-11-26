import { Component, OnInit } from '@angular/core';
import { Employee } from '../../Employee';
import {Router} from '@angular/router';
import {EmployeeService} from '../../services/employee.service';
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  employee : Employee = {
    firstName:"",
    lastName:"",
    email:"",
    country:"",
    city:"",
    phone:0,
    salary:0
  };

  disableSalary: boolean = true;
  constructor(public router:Router,public employeeService:EmployeeService) { }

  ngOnInit() {
  }


  mySubmit({value, valid}:{value:Employee,valid:boolean}){

    if(this.disableSalary){
      value.salary = 0;
    }


    if(!valid){
      console.log("Not Corrected Data");
      this.router.navigate(['add-employee']);
    }else{
      this.employeeService.addEmployees(value)
      this.router.navigate(['/']);
      console.log(this.employee);

    }
  }

}
