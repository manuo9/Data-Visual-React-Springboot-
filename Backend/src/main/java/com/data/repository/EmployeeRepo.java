package com.data.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.data.entity.EmpEntity;

public interface EmployeeRepo extends JpaRepository<EmpEntity, Long>{

}
