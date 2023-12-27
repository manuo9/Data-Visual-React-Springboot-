package com.data.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
//import java.util.List;
//import java.util.Map;
//
//import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.data.entity.EmpEntity;
import com.data.service.EmployeeService;

@RestController
@RequestMapping("/data")
public class DataController {
	@Autowired
	EmployeeService empservice;
	@CrossOrigin("*")
	@GetMapping("/findall") 
    public ArrayList<EmpEntity> getAllEmployee() { 
        return empservice.findAllEmployee(); 
    }
	
	 @GetMapping("/findbyid/{id}") 
	    public EmpEntity getEmployeeUsingId(@PathVariable long id) { 
	        return empservice.findAllEmployeeByID(id); 
	    }
//    @GetMapping("/emp")
//    public String getAllData() {
//
//        return "namstey";
//    }
	   
}
