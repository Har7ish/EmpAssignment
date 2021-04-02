import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IEmployee } from '../models/dbemployee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  private _url: string = "http://localhost:4000/IEmployee";
  
  constructor(private http: HttpClient) { }

  getEmployees(): Observable<IEmployee[]>{
   return this.http.get<IEmployee[]>(this._url)
   .pipe(catchError(this.errorHandler));
  }

  getEbyID(id:number): Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this._url+'/'+id)
   .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse){
   return throwError(error.message || "Server Error")
  }
///////////
  postEmployee(empData:any): Observable<IEmployee[]>{
    return this.http.post<IEmployee[]>(this._url, empData)
    .pipe(catchError(this.errorHandler));
}

  updateEmployee(id: number, empData:any): Observable<IEmployee[]>{
    console.log(empData)
    console.log(this._url + '/' + id)
    return this.http.put<IEmployee[]>(this._url + '/' + id, empData)
    .pipe(catchError(this.errorHandler));
}

  deleteEmployee(id: number) {
    return this.http.delete(this._url + '/' + id);
}

/////////
  // constructor() { }
  
  // public employee=[
  //   {"First_name":"John","Last_name":"Wick","Salary":10000,"Dept":"Engineering"},
  //   {"First_name":"Hal","Last_name":"Jordan","Salary":75000,"Dept":"Engineering"},
  //   {"First_name":"Scott","Last_name":"Summers","Salary":15000,"Dept":"Marketing"},
  //   {"First_name":"James","Last_name":"Howlett","Salary":20000,"Dept":"Quality"},
  //   {"First_name":"Jean","Last_name":"Grey","Salary":50000,"Dept":"Manufacturing"},
    
  // ]

  // getEmployees(){
  //   return this.employee;
  // }

}
