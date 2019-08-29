import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEmployee } from './employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private _url:string="/assets/data/employees.json";
  constructor(private http:HttpClient) { }
  getEmp(): Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this._url);
  }
  getEmployees() {
    return [
      {"id":1,"name":"Shivani","age":22},
      {"id":2,"name":"Poorvi","age":22},
      {"id":3,"name":"Haripriya","age":22},
      {"id":4,"name":"Deepak","age":22}
    ];
  }
}
