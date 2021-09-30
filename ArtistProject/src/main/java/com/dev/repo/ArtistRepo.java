package com.dev.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dev.Entity.Artist;



public interface ArtistRepo extends JpaRepository<Artist, Integer>{

	//User findByEmail(String email);
	//User findOne(String email);

}
