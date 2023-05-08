import { Component, OnInit } from '@angular/core';
import { IEmployee } from './interfaces/IEmployee';
import { EmployeeService } from './services/employee.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  employees: IEmployee[] = []

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.getEmployees()
  }

  getEmployees(){
    this.employeeService.getEmployees().subscribe(
      (res: IEmployee[]) => {
        this.employees = res
      },
      (error: HttpErrorResponse) => {
        alert(error.message)
      }
    )
  }

}
