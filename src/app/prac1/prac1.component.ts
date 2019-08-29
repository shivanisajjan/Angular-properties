import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-prac1',
  template: `
    <h1>Services(Hard coded)</h1>
    <h2>Employees Details</h2>
    <ul *ngFor="let i of employees">
      <li>{{i.id}}.{{i.name}}-{{i.age}}</li>
    </ul>
    <h1>Using HTTP request</h1>
    <h2>Employees Details</h2>
    <ul *ngFor="let i of employee">
      <li>{{i.id}}.{{i.name}}-{{i.age}}</li>
    </ul>
  `,
  styleUrls: ['./prac1.component.scss']
})
export class Prac1Component implements OnInit {

  public employees=[];
  public employee=[];
  constructor(private _employeeServices: EmployeeService) { }

  ngOnInit() {
    this.employees = this._employeeServices.getEmployees();
    this._employeeServices.getEmp().subscribe(data => this.employee = data );
  }

}
