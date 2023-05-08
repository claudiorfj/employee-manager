import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IEmployee } from './interfaces/IEmployee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiServerUrl = ''

  constructor(private http: HttpClient) { }

  public getEmployees(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(`${this.apiServerUrl}/employee/all`)
  }

  public addEmployee(employee: IEmployee): Observable<IEmployee> {
    return this.http.post<IEmployee>(`${this.apiServerUrl}/employee/add`, employee)
  }

  public updateEmployee(employee: IEmployee): Observable<IEmployee> {
    return this.http.put<IEmployee>(`${this.apiServerUrl}/employee/update`, employee)
  }

  public deleteEmployee(employeeId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/employee/delete/${employeeId}`)
  }

}
