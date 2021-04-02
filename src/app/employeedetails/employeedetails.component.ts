import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,ParamMap} from '@angular/router';
import {EmployeeServiceService} from '../services/employee-service.service';

@Component({
  selector: 'app-employeedetails',
  templateUrl: './employeedetails.component.html',
  styleUrls: ['./employeedetails.component.css']
})
export class EmployeedetailsComponent implements OnInit {

  constructor(private empService:EmployeeServiceService, private route: ActivatedRoute) { }
  public empid:any;
  public em:any;
  public errorMsg:any;
  ngOnInit(): void {
    this.route.paramMap.subscribe((params:ParamMap)=>{
      let id= params.get('id');
      this.empid=id;
    })
    this.empService.getEbyID(this.empid).subscribe(
      (data)=>this.em=data,
      (error)=>this.errorMsg=error
    )
  }

}
