import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import {Employee} from '../../Employee';
import {Router, ActivatedRoute, Params} from '@angular/router';
@Component({
  selector: 'app-employee-info',
  templateUrl: './employee-info.component.html',
  styleUrls: ['./employee-info.component.css']
})
export class EmployeeInfoComponent implements OnInit {

  id:string;
  employee:Employee;
  hasSalary:boolean=false;
  updateSalary:boolean=false;
  constructor(public employeeService:EmployeeService,public activatedRoute:ActivatedRoute,public router:Router) { 

  }

  ngOnInit() {
    this.id=this.activatedRoute.snapshot.params['id'];
    this.employeeService.getEmployee(this.id).valueChanges().subscribe(employee=>{
      if(employee.salary>0){
        this.hasSalary=true;
      }  
      this.employee=employee;
      console.log(this.employee);
    });
  }

}
