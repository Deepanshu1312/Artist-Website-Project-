package com.dev.Entity;

import javax.persistence.*;
import javax.validation.constraints.Email;


import lombok.*;


@NoArgsConstructor
@AllArgsConstructor
@ToString
@Getter
@Setter
@Entity
@Table(name = "users")
public class User extends BaseEntity {

	@Column(length = 20)
	private String fname;
	@Column(length = 30)
	private String lname;
	@Column(length = 30,unique = true)
	@Email
	private String email;
	@Column(length = 20,nullable = false)
	private String password;
	@Column(length = 10,unique = true)
	private String number;
	@Column(length = 20)
	private String role;
	@Column(name = "account_status")
	private boolean isActive;
	
	
}

