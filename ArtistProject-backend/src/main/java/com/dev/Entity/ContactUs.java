package com.dev.Entity;

import javax.persistence.*;
import javax.validation.constraints.Email;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Entity
@Table(name = "contact")
public class ContactUs extends BaseEntity{

	private String name;
	@Email
	private String email;
	private String number;
	private String course;
	@Column(length = 100)
	private String comment;
	
}
