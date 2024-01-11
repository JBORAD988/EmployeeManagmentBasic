import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {EmployeesService} from "../../../services/employees.service";
import {EmployeeModel} from "../../models/employee.model";



@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.scss']
})
export class EditEmployeeComponent implements OnInit{

  employeeDetails: EmployeeModel ={
    id:'',
    name:'',
    email:'',
    phone: 0,
    salary:0,
    department:''
  }

  constructor(private route: ActivatedRoute, private employeeService: EmployeesService , private  router: Router) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe( params=>{
      const id = params.get('id');
      if(id){
        this.employeeService.getEmployee(id).subscribe(response=>{
          this.employeeDetails = response;
      })
      }
      }
    )
  }

  updateEmployee(){
    this.employeeService.updateEmployee(this.employeeDetails.id, this.employeeDetails).subscribe(response =>{
      // this.employeeDetails = response;
      this.router.navigate(['employees']).then(r => true)
    })

  }

  deleteEmployee(){
    const id = this.employeeDetails.id
    this.employeeService.deleteEmployee(id).subscribe(response=>{
      this.router.navigate(['employees']).then(r => true)
    })
  }

}
