package com.claudiorfj.employeemanager.service;

import java.util.UUID;
import java.util.List;
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

  public List<Employee> findAllEmployees(){
    return employeeRepo.findAll();
  }

  public Employee updatEmployee(Employee employee) {
    return employeeRepo.save(employee);
  }

  public void deleteEmployee(Long id) {
    employeeRepo.deleteEmployeeById(id);
  }

  public Employee findEmployeeById(Long id) {
    return employeeRepo.findEmployeeById(id)
      .orElseThrow(() -> new UserNotFoundException("User by id " + id + " was not found"));
  }

  public Employee updateEmployee(Employee employee) {
    return null;
  }
  

}
