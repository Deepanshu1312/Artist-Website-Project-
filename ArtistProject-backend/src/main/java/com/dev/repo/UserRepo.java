package com.dev.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dev.Entity.User;

public interface UserRepo extends JpaRepository<User, Integer>{

	User findByEmail(String email);
	List<User> findByRole(String role);


}
