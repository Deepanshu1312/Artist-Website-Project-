package com.dev.Entity;

import java.time.LocalDate;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;


@NoArgsConstructor
@AllArgsConstructor
@ToString
@Getter
@Setter
@Entity
@Table(name = "customers")
public class Customer extends BaseEntity{

	
	@Column(length = 10)
	private LocalDate regDate;
//	@OneToMany(cascade = CascadeType.ALL)
//	@JoinColumn(name = "productId", referencedColumnName = "id",nullable = false)
//	private List <Product> productPurchased;
//	@OneToOne()
//	@JoinColumn(name="userId", referencedColumnName = "id",nullable = false) 
//	private User userCustomer;
	
	
	
	
	
	
	
	
	
	
}
