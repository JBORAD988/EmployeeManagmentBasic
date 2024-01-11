import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {EmployeeModel} from "../components/models/employee.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private _httpClient: HttpClient) { }

  getAllEmployees(): Observable< EmployeeModel[]> {
    return this._httpClient.get<EmployeeModel[]>('https://localhost:7009/api/Employees')

  }

  addEmployee(addEmployeeRequest: EmployeeModel): Observable<EmployeeModel>{
    addEmployeeRequest.id = '00000000-0000-0000-0000-000000000000'
    return this._httpClient.post<EmployeeModel>('https://localhost:7009/api/Employees', addEmployeeRequest)
  }

  getEmployee(id: string): Observable<EmployeeModel> {
    return this._httpClient.get<EmployeeModel>('https://localhost:7009/api/Employees/' + id);
  }

  updateEmployee(id: string, updateEmployeeRequest: EmployeeModel): Observable<EmployeeModel>{
    return this._httpClient.put<EmployeeModel>('https://localhost:7009/api/Employees/' + id, updateEmployeeRequest)
  }

  deleteEmployee(id: string):Observable<EmployeeModel>{
   return  this._httpClient.delete<EmployeeModel>('https://localhost:7009/api/Employees/' + id)

  }

}



// public addBook(bookModel: BookModel): Observable<BookModel> {
//   return   this._httpClient.post<BookModel>('https://localhost:7104/api/BookModels', bookModel)
// }
//
// public getBooks(): Observable<BookModel[]> {
//   return   this._httpClient.get<BookModel[]>('https://localhost:7104/api/BookModels')
//
// }
