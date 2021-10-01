package com.dev.services;

import java.io.IOException;
import java.util.stream.Stream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import com.dev.Entity.CustomOrder;
import com.dev.Entity.FileDB;
import com.dev.repo.CustomOrderRepo;

@Service
public class CustomOrderService {

  @Autowired
  private CustomOrderRepo fileDBRepository;

  public CustomOrder store(MultipartFile file) throws IOException {
    String fileName = StringUtils.cleanPath(file.getOriginalFilename());
    CustomOrder FileDB = new CustomOrder(fileName, file.getContentType(), file.getBytes());

    return fileDBRepository.save(FileDB);
  }

  public CustomOrder getFile(Integer id) {
    return fileDBRepository.findById(id).get();
  }
  
  public Stream<CustomOrder> getAllFiles() {
    return fileDBRepository.findAll().stream();
  }
}
