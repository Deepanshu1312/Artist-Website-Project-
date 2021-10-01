package com.dev.Entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@AllArgsConstructor
@NoArgsConstructor
@ToString
@Getter
@Setter
@Entity
@Table(name = "artist")
public class Artist extends BaseEntity{



//	@OneToOne
//	@JoinColumn(name="userid", referencedColumnName = "id")
//	private User user;
	@Column(length = 50)
	private String address;
	
	
	
	
	
	
	
}
