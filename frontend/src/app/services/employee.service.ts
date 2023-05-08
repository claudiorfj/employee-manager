import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IEmployee } from '../interfaces/IEmployee';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiServerUrl = environment.apiBaseUrl

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(`${this.apiServerUrl}/employee/all`)
  }

  addEmployee(employee: IEmployee): Observable<IEmployee> {
    return this.http.post<IEmployee>(`${this.apiServerUrl}/employee/add`, employee)
  }

  updateEmployee(employee: IEmployee): Observable<IEmployee> {
    return this.http.put<IEmployee>(`${this.apiServerUrl}/employee/update`, employee)
  }

  deleteEmployee(employeeId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/employee/delete/${employeeId}`)
  }

}
