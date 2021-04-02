import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { HighlightDirective } from './highlight.directive';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { DisplayEmployeeComponent } from './display-employee/display-employee.component';
import { ClickDirective } from './click.directive';
import { NamecapitalizePipe} from './namecapitalize.pipe';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EmployeedetailsComponent } from './employeedetails/employeedetails.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { EditemployeeComponent } from './editemployee/editemployee.component';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    HighlightDirective,
    EmployeeListComponent,
    DisplayEmployeeComponent,
    ClickDirective,
    NamecapitalizePipe,
    PageNotFoundComponent,
    EmployeedetailsComponent,
    AddemployeeComponent,
    EditemployeeComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger', 
      cancelButtonType: 'primary',// set defaults here
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
