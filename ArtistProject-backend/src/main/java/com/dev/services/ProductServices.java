package com.dev.services;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.dev.Entity.Product;
import com.dev.repo.ProductRepo;


@Service
@Transactional
public class ProductServices implements IProductServices {

	@Autowired
	private ProductRepo productRepo;
	

	@Override
	public Product addProduct(Product product) {
		return productRepo.save(product);
	}

}
