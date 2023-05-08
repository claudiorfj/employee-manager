package com.claudiorfj.employeemanager.service;

public class UserNotFoundException extends RuntimeException {
  public UserNotFoundException(String message) {
      super(message);
  }
}