package com.dev.services;



import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


import com.dev.Entity.User;

import com.dev.repo.UserRepo;

@Service
@Transactional
public class UserServices implements IUserServices {

	@Autowired
	private UserRepo userRepo;
	

	
	@Override
	public List<User> getAllUsers() {
		System.out.println("in services");
		return userRepo.findAll();
	}



	@Override
	public void addusers(User user) {
		System.out.println("in services");
		userRepo.save(user);
	}


	@Override
	public User findById(int id) {
		Optional<User> us =userRepo.findById(id);
		return us.orElse(null);
	}

	@Override
	public User findByEmail(String email) {
		return userRepo.findByEmail(email);
	}

	
	@Override
	public User update(User user) {
		return userRepo.save(user);
	}

	@Override
	public void deleteById(int id) {
		userRepo.deleteById(id);
		
	}

	@Override
	public User save(User user) {
		return userRepo.save(user);
	}
	
	
	
	@Override
	public List<User> getCustomers() {
		return userRepo.findByRole("CUSTOMER");
	}

	@Override
	public List<User> getArtist() {
		return userRepo.findByRole("ARTIST");
	}
	
	@Override
	public List<User> getAdmin() {
		return userRepo.findByRole("ADMIN");
	}

}
