package com.dev.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dev.Entity.ContactUs;
import com.dev.services.IContactServices;

@RestController
@CrossOrigin
@RequestMapping("/contact")
public class ContactController {

	@Autowired
	private IContactServices contactService;

	public ContactController() {
		System.out.println("in ctor " + getClass().getName());

	}


	// get all user
	
//	@GetMapping("/getUsers")
//	public ResponseEntity<List<User>> getUsers() {
//		List<User> list = contactService.getAllUsers();
//		return new ResponseEntity<>(list, HttpStatus.OK);
//	}

	@PostMapping
	public ResponseEntity<ContactUs> save(@RequestBody ContactUs contact) {
		ContactUs newContact = contactService.addContact(contact);
		return ResponseEntity.ok(newContact);
	}


}
