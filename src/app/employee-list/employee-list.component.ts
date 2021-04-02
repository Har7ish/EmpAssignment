import { Component, OnInit } from '@angular/core';
import {EmployeeServiceService} from '../services/employee-service.service'

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  public employee:any;
  public errorMsg: any;

  constructor(private empService:EmployeeServiceService) { }

  ngOnInit(): void {
    // this.employee=this.empService.getEmployees();

    this.empService.getEmployees().subscribe(
      (data) => {this.employee = data; console.log(data)},
      (error) => this.errorMsg = error,
      () => console.log("Completed")
    );

  }

}
