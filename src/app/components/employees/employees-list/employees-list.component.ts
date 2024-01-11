import {Component, Input, OnInit} from '@angular/core';
import {EmployeeModel} from "../../models/employee.model";
import {EmployeesService} from "../../../services/employees.service";

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.scss']
})
export class EmployeesListComponent implements OnInit{

 employees: EmployeeModel[] = [

 ];

 constructor(private employeesService: EmployeesService) {
 }

 ngOnInit() {
   this.employeesService.getAllEmployees().subscribe((showEmployee)=>{
     this.employees = showEmployee
   })



 }

}
