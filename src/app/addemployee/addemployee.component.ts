import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormArray, Validators } from '@angular/forms';
import { EmployeeServiceService } from '../services/employee-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {

  public employeeForm:any;
  public errorMsg:any;
  public employees:any;

  constructor(private fb: FormBuilder, private empService: EmployeeServiceService, private router: Router) { }

  ngOnInit(): void {
    this.employeeForm = this.fb.group({
      id: ['', [Validators.required, Validators.pattern('[0-9]')]],
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      salary: ['', [Validators.required, Validators.max(10000000)]],
      dept: ['', [Validators.required, Validators.minLength(3)]]
    });
  }
  onSubmit(employeeForm:any){
    console.log(this.employeeForm.value);
    this.empService.postEmployee(this.employeeForm.value).subscribe(
      (data) => {
        this.employees = data; 
        console.log(this.employees);
        this.empService.getEmployees().subscribe(
          (data) => this.employees = data,
          (error) => this.errorMsg = error
        )
      },
      (error) => this.errorMsg = error
    )
    this.router.navigate(['/employees']);    //
    this.employeeForm.reset();
  }

  get id(){
    return this.employeeForm.get('id');
  }

  get firstName() {
    return this.employeeForm.get('firstName');
  }

  get lastName() {
    return this.employeeForm.get('lastName');
  }

  get salary() {
    return this.employeeForm.get('salary');
  }

  get dept() {
    return this.employeeForm.get('dept');
  }


}
