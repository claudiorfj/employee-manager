package com.claudiorfj.employeemanager.service;

import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.claudiorfj.employeemanager.model.Employee;
import com.claudiorfj.employeemanager.repo.EmployeeRepo;

@Service
public class EmployeeService {
  private final EmployeeRepo employeeRepo;

  @Autowired
  public EmployeeService(EmployeeRepo employeeRepo){
    this.employeeRepo = employeeRepo;
  }

  public Employee addEmployee(Employee employee) {
    employee.setEmployeeCode(UUID.randomUUID().toString());
    return employeeRepo.save(employee);
  }

}
