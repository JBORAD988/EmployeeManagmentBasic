import {Component, OnInit} from '@angular/core';
import {EmployeeModel} from "../../models/employee.model";
import {EmployeesService} from "../../../services/employees.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit{


  addEmployeeRequest: EmployeeModel = {
    id:'',
    name:'',
    email:'',
    phone: 0,
    salary:0,
    department:''
  }
  constructor(private EmployeeService: EmployeesService, private router: Router) {
  }

  ngOnInit() {
  }

  addEmployee(){
    this.EmployeeService.addEmployee(this.addEmployeeRequest).subscribe(add =>{
      // console.log(add)
      // this.addEmployeeRequest = add
      this.router.navigate(['employees']).then(r => true)
    })
  }
}
