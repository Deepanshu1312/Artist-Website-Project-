package com.dev.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dev.Entity.Product;


public interface ProductRepo extends JpaRepository<Product, Long>{

	
}
