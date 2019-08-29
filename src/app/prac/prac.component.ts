import { Component, OnInit, Input, Output ,EventEmitter} from '@angular/core';
import { EmployeeService } from '../employee.service';
// import { EventEmitter } from 'events';

@Component({
  selector: 'app-prac',
  template: `
  <h1>Welcome to  {{name}}</h1>
  <h4>{{6+10}}</h4>
  <h4>{{"Welcome "+ name}}</h4>
  <h4>{{name.length}}</h4>
  <h4>{{wishes()}}</h4>
  <h4>{{site}}</h4>

  <h1>Property Binding</h1>
  <input disabled="true" [id]="myid" type=text value="Shivani" />
  <input [disabled]="isDisabled" id="{{myid}}" type=text value="Shivani" />
  <input bind-disabled="isDisabled" id="{{myid}}" type=text value="Shivani" />

  <h1>Class Binding</h1>
  <h2 class="ts">Shivani</h2>
  <h2 [class]="ts1">Shivani</h2>
  <h2 [class.td]="isDisabled">Shivani</h2>
  <h2 [ngClass]="msg">Shivani</h2>

  <h1>Event Binding</h1>
  <button (click)="OnC($event)">Greet</button><br>
  <button (click)="greeting='Welcome Shivani'">Greet</button>
  {{greeting}}<br>

  <h1>Template Reference variable</h1>
  <input #myInput type="text">
  <button (click)="logmessage(myInput.value)">log</button><br>  
  <input #myInput1 type="text">
  <button (click)="logmessage(myInput1)">log</button><br>

  <h1>Two Way Binding</h1>
  <input [(ngModel)]="twoway" type="text">
  {{twoway}}

  <h1>ngIf</h1>
  <div *ngIf="isDisabled; then ifBlock; else elseBlock"></div>
  <ng-template #ifBlock> 
   <h4>Name:Shivani</h4>
  </ng-template>
  <ng-template #elseBlock> 
   <h4>Name is hidden</h4>
  </ng-template>

  <h4 *ngIf="isDisabled; else elseBlock1">Shivani</h4>
  <ng-template #elseBlock1> 
   <h4>Name is hidden</h4>
  </ng-template>


  <h1>ngSwitch</h1>
  <div [ngSwitch]="color">
    <div *ngSwitchCase="'red'">You Picked Red Color</div>
    <div *ngSwitchCase="'green'">You Picked Green Color</div>
    <div *ngSwitchCase="'blue'">You Picked Blue Color</div>
    <div *ngSwitchCase="'orange'">You Picked Orange Color</div>
    <div *ngSwitchDefault>Pick again</div>
  </div>


  <h1>ngFor</h1>
  <div *ngFor="let colo of color1; index as i">
    <h4>{{i}}.{{colo}}</h4>
  </div><br><br>

  <div *ngFor="let colo1 of color1; last as l">
    <h4>{{l}}.{{colo1}}</h4>
  </div><br><br>

  <div *ngFor="let colo2 of color1; even as e">
    <h4>{{e}}.{{colo2}}</h4>
  </div><br>


  <h1>Component Interaction</h1>

  <h2>Parent to child</h2>
  <h4>{{"Hello "+ parentData}}</h4>
  <h4>{{"Hello "+ name12}}</h4>

  <h2>child to parent</h2>
  <button (click)="fire()">click</button><br><br>

  <h1>Pipes</h1>
  <h2>Pipes for Strings</h2>
  <h4>{{uname | lowercase}}</h4>
  <h4>{{uname | uppercase}}</h4>
  <h4>{{uname | titlecase}}</h4>
  <h4>{{uname | slice:8:14}}</h4>
  <h4>{{person | json}}</h4>
  <h2>Pipes for Number</h2>
  <h4>{{4.234 | number:'1.2-3'}}</h4>
  <h4>{{4.234 | number:'3.4-6'}}</h4>
  <h4>{{4.234 | number:'3.1-2'}}</h4>
  <h2>Pipes for Percent and Currency</h2>
  <h4>{{0.4 | percent}}</h4>
  <h4>{{50 | currency}}</h4>
  <h4>{{500 | currency:'INR'}}</h4>
  <h4>{{500 | currency:'INR':'code'}}</h4>
  <h2>Pipes to Display Date</h2>
  <h4>{{date}}</h4>
  <h4>{{date | date:'short'}}</h4>
  <h4>{{date | date:'shortDate'}}</h4>
  <h4>{{date | date:'shortTime'}}</h4>

  <h1>Services(Hard coded)</h1>
  <h2>Employees List</h2>
  <ul *ngFor="let i of employees">
    <li>{{i.name}}</li>
  </ul>
  <h1>Using HTTP request</h1>
  <h2>Employees List</h2>
    <ul *ngFor="let i of employee">
      <li>{{i.id}}.{{i.name}}-{{i.age}}</li>
    </ul>

    <h1>On Enter</h1>
    <input #box (keyup.enter)="onEnter(box.value)">
    <p>{{value}}</p>
  `,
  styles: [`
  .ts{
    color:green;
  }
  .td{
    color:red;
  }
  .tx{
    font-style:italic;
  }
  `]
})
/* <h2>{{q1.toLowerCase}}</h2> */
export class PracComponent implements OnInit {
  public name="CGI";
  public q1="cgi";
  public uname="Shivani sajjan";
  public site=window.location.href;
  public myid="id1";
  public isDisabled= false;
  public ts1="ts";
  public msg={
    "ts" : this.isDisabled,
    "td" : !this.isDisabled,
    "tx": this.isDisabled
  }
  public greeting="";
  public gree="";
  public twoway="";
  public color="pink";
  public color1=["red","blue","green","orange"];

  @Input() public parentData;
  @Input('parentData1') public name12;

  @Output() public child = new EventEmitter();
  public person={
    firstName :"Shivani",
    lastName: "Sajjan"
  }

  public date=new Date();
  public employees=[];
  public employee=[];
  constructor(private _employeeServices: EmployeeService) { }

  ngOnInit() {
    this.employees = this._employeeServices.getEmployees();
    this._employeeServices.getEmp().subscribe(data => this.employee = data );
  }
  wishes(){
    return "Good Morning " + this.uname;
  }
  OnC(event){
    console.log(event);
    this.greeting=event.type;
    // this.gree="Good ";
  }
  logmessage(value){
    console.log(value);
  }

  fire(){
    this.child.emit("hey codevalution");
  }
  value = '';
  onEnter(value: string) { this.value = value; }
}