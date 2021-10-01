package com.dev.controller;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dev.Entity.User;
import com.dev.services.IUserServices;

@RestController
@CrossOrigin
@RequestMapping("/users")
public class UserController {

	@Autowired
	private IUserServices userService;
	
	
	public UserController() {
		System.out.println("in ctor " + getClass().getName());

	}

	// get user by Id
	
	@GetMapping("/getById/{id}")
	public ResponseEntity<?> findByIds(@PathVariable("id") int id) {
		Map<String, Object> map = new HashMap<>();
		User user = userService.findById(id);
		map.put("status", "success");
		map.put("data", user);
		return ResponseEntity.ok(map);
	}

	// get user by email
	
	@GetMapping("/email/{email}")
	public ResponseEntity<User> findByEmailid(@PathVariable("email") String email) {
		User user = userService.findByEmail(email);
		if (user == null)
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		return ResponseEntity.ok(user);
	}

	// get all user
	
	@GetMapping("/getUsers")
	public ResponseEntity<List<User>> getUsers() {
		List<User> list = userService.getAllUsers();
		return new ResponseEntity<>(list, HttpStatus.OK);
	}

	
	// save or update user(student)

	@PostMapping("/addArtist")
	public ResponseEntity<User> save(@RequestBody User user) {
		user.setRole("ARTIST");
		user.setActive(true);
		User newUser = userService.save(user);
		return ResponseEntity.ok(newUser);
	}
	
	@PostMapping("/addCustomer")
	public ResponseEntity<User> saveCustomer(@RequestBody User user) {
		user.setRole("CUSTOMER");
		user.setActive(true);
		User newUser = userService.save(user);
		return ResponseEntity.ok(newUser);
	}
	
	@PostMapping("/addAdmin")
	public ResponseEntity<User> saveAdmin(@RequestBody User user) {
		user.setRole("ADMIN");
		user.setActive(true);
		User newUser = userService.save(user);
		return ResponseEntity.ok(newUser);
	}
	
	

//	@PostMapping("/products")
//	public ResponseEntity<Product> save(@RequestBody Product product) {
//		Product newUser = productService.addProduct(product);
//		return ResponseEntity.ok(newUser);
//	}
	
	
	//Add image to database
//	@PostMapping("/product")
//	  Long uploadImage(@RequestParam("image") MultipartFile multipartImage) throws Exception {
//		  Product dbImage = new Product();
//	      //  dbImage.setImage(multipartImage.getBytes());
//		  dbImage.setImage(multipartImage.getBytes());
//	        return imageDbRepository.save(dbImage)
//	            .getId();
//	    }

	
	//download image from database
//	@GetMapping(value = "/product/{id}", produces = MediaType.IMAGE_JPEG_VALUE)
//	
//	Resource downloadImage(@PathVariable Long id) {
//		  byte[] image = imageDbRepository.findById(id)
//			      .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND))
//			      .getImage();
//
//			    return new ByteArrayResource(image);
//		
//	}
//	
//	@GetMapping("/files/{id}")
//	public ResponseEntity<byte[]> getFile(@PathVariable Integer id) {
//		System.out.println("in get file");
//		 Product fileDB = imageDbRepository.getById(id);
//
//		return ResponseEntity.ok()
//				.header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + fileDB.getName() + "\"")
//				.body(fileDB.getData());
//	}
	
//	@PostMapping("/upload")
//	public ResponseEntity<ResponseMessage> uploadFile(@RequestParam("file") MultipartFile file) {
//		String message = "";
//		try {
//			storageService.store(file);
//
//			message = "Uploaded the file successfully: " + file.getOriginalFilename();
//			return ResponseEntity.status(HttpStatus.OK).body(new ResponseMessage(message));
//		} catch (Exception e) {
//			message = "Could not upload the file: " + file.getOriginalFilename() + "!";
//			return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(new ResponseMessage(message));
//		}
//	}
//	
	
	
	// get all customers
		@GetMapping("/getCustomer")
		public ResponseEntity<List<User>> getAllStudents() {
			List<User> list = userService.getCustomers();
			return new ResponseEntity<>(list, HttpStatus.OK);
		}

		// get all user faculty
		@GetMapping("/getArtist")
		public ResponseEntity<List<User>> getAllFaculty() {
			List<User> list = userService.getArtist();
			return new ResponseEntity<>(list, HttpStatus.OK);
		}

		// get all admin
		@GetMapping("/getAdmin")
		public ResponseEntity<List<User>> getAllAdmin() {
			List<User> list = userService.getAdmin();
			return new ResponseEntity<>(list, HttpStatus.OK);
		}
	
	
	
	
	
	
	// update user
	
	@PutMapping("/update/{id}")
	public ResponseEntity<User> update(@PathVariable("id") int id, @RequestBody User user) {
		user.setId(id);
		User newUser = userService.update(user);
		return ResponseEntity.ok(newUser);
	}

	// delete user
	
	@DeleteMapping("/delete/{id}")
	public void delete(@PathVariable("id") int id) {
		userService.deleteById(id);
	}

}
