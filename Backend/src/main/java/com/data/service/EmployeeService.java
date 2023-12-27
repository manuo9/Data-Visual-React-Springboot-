package com.data.service;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.data.entity.EmpEntity;
import com.data.repository.EmployeeRepo;

@Service
public class EmployeeService {
	@Autowired 
	EmployeeRepo emprepo; 
	
	 public ArrayList<EmpEntity> findAllEmployee() { 
	        return (ArrayList<EmpEntity>) emprepo.findAll(); 
	    } 
	    
	   
	    public EmpEntity findAllEmployeeByID(long id) { 
	        Optional<EmpEntity> opt = emprepo.findById(id); 
	        if (opt.isPresent()) 
	            return opt.get(); 
	        else
	            return null; 
	    }


		public void deleteAllData() {
			
			
		} 
}
