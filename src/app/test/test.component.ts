import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public employee=[
    {"name":"John","age":25,"gender":"M"},
    {"name":"Bruce","age":40,"gender":"M"},
    {"name":"Hal","age":30,"gender":"M"},
    {"name":"Clark","age":45,"gender":"M"},
    {"name":"Clint","age":22,"gender":"M"},
  ]

  public i:number=0
  
  checkAge (age:number):string{
    if (age>40)
    {
      return ("Sr.Employee");
    }
    else
    {
      return ("Jr.Employee");
    }

  }

  checkSalary (position:string,i:number):number{

    if (position=="Sr.Employee")
    {
      return this.employee[i].age*10+50;
    }
    else
    {
      return this.employee[i].age*5+50;
    }
  }

}
