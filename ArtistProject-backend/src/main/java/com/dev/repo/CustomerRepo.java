package com.dev.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dev.Entity.Customer;


public interface CustomerRepo extends JpaRepository<Customer, Integer>{

	
}
