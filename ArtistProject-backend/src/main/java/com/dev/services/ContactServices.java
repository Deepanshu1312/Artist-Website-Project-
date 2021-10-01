package com.dev.services;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.dev.Entity.ContactUs;
import com.dev.repo.ContactUsRepo;


@Service
@Transactional
public class ContactServices implements IContactServices {

	@Autowired
	private ContactUsRepo contactUsRepo;
	
	
	
	@Override
	public ContactUs addContact(ContactUs contact) {
		return contactUsRepo.save(contact);

	}

}
