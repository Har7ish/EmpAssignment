import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { EmployeeServiceService } from '../services/employee-service.service';



@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.css']
})
export class DisplayEmployeeComponent implements OnInit {

  @Input() public employee_det:any;

  public e_name:any;
  public employee:any;
  public errorMsg:any;
  popoverTitle = 'You are about to wipe this poor field from existence';
  popoverMessage = 'Are you really going to do it?';
  confirmClicked = false;
  cancelClicked = false;

  constructor(private router:Router, private empService:EmployeeServiceService) {}

  click4det(i:number){
    console.log(this.employee_det[i].firstName+' '+this.employee_det[i].lastName);
    this.e_name=(this.employee_det[i].firstName+' '+this.employee_det[i].lastName);
  }

  detselect(emp:any){
    this.router.navigate(['/employees/',emp.id]);
  }

  editEmployee(employee:any){
    this.router.navigate(['/editemployee/', employee.id]);
  }

  addEmployee(){
    this.router.navigate(['/addemployee/']);
  }

  deleteEmployee(employee:any){
    this.empService.deleteEmployee(employee.id).subscribe(() => {
      this.empService.getEmployees().subscribe(
        (data) => this.employee = data,
        (error) => this.errorMsg = error
      )
    })
  }


  ngOnInit(): void {}
    // this.empService.getEmployees().subscribe(
    //   (data) => {this.employees = data; console.log(data)},
    //   (error) => this.errorMsg = error,
    //   () => console.log("Completed")
    // )

   

  }
    
   
  


