package com.claudiorfj.employeemanager.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import com.claudiorfj.employeemanager.model.Employee;

public interface EmployeeRepo extends JpaRepository<Employee, Long> {
  
}
