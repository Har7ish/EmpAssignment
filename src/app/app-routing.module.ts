import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { TestComponent } from './test/test.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import { EmployeedetailsComponent } from './employeedetails/employeedetails.component';
import {AddemployeeComponent} from './addemployee/addemployee.component';
import {EditemployeeComponent} from './editemployee/editemployee.component';

const routes: Routes = [
    {path:'',redirectTo:'/home',pathMatch:'full'},
    {path:'home',component:TestComponent},
    {path:'employees', component: EmployeeListComponent},
    {path:'employees/:id', component: EmployeedetailsComponent},
    {path:'addemployee',component: AddemployeeComponent},
    {path:'editemployee/:id',component:EditemployeeComponent},
    {path:'**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
