package com.dev.services;

import java.util.List;



import com.dev.Entity.User;

public interface IUserServices {

	List <User> getAllUsers();

	void addusers(User user);
	User findById(int id);
	User findByEmail(String email);
	User update(User user);
	void deleteById(int id);
	User save(User user);
	List<User> getCustomers();
	List<User> getArtist();
	List<User> getAdmin();

}
