import { Injectable } from '@angular/core';
import {AngularFireDatabase , AngularFireList , AngularFireObject} from 'angularfire2/database';
import {Observable} from 'rxjs';
import {Employee} from '../Employee';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  emplyees:AngularFireList<Employee>;
  employee:AngularFireObject<any>;
  constructor(public af:AngularFireDatabase) {
    this.emplyees=this.af.list('/employees/employees') as AngularFireList<Employee>;

  }

  getEmployees(){
    return this.emplyees;
  }

  addEmployees(emplyee:Employee){
    return this.emplyees.push(emplyee);
  }

  getEmployee(id:string){
    this.employee=this.af.object('/employees/employees/'+id) as AngularFireObject<Employee>;
    return this.employee;
  }
}
