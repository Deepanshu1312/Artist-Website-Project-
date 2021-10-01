package com.dev.controller;

	import javax.servlet.http.HttpSession;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dev.Entity.User;
import com.dev.model.Response;
import com.dev.services.IUserServices;

	@RestController
	@CrossOrigin
	public class LoginController {
		
		@Autowired  
		private IUserServices userService;   
		
		
		
		  @PostMapping("/users/authenticateUser")
			public ResponseEntity<?> authenticateUser(User user,HttpSession session) {

				User authuser = userService.findByEmail(user.getEmail());

				
				if(authuser!=null && authuser.getRole().equals("CUSTOMER") ){
					if(authuser.getPassword().equals(user.getPassword()) ){
						
						return Response.success(authuser);
					}
				}else if(authuser!=null && authuser.getRole().equals("ARTIST") ){
					if(authuser.getPassword().equals(user.getPassword()) ){
						
						return Response.success(authuser);
					}
				}else if(authuser!=null && authuser.getRole().equals("ADMIN") ){
					if(authuser.getPassword().equals(user.getPassword()) ){
						
						return Response.success(authuser);
					}
				}	
				return Response.error("404");
			}
		
	}


