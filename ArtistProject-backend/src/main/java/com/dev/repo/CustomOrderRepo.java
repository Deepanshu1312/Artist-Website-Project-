package com.dev.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.dev.Entity.CustomOrder;

@Repository
public interface CustomOrderRepo extends JpaRepository<CustomOrder,Integer> {

}
