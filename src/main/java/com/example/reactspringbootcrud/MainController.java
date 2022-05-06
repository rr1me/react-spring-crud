package com.example.reactspringbootcrud;

import com.example.reactspringbootcrud.book.BookEntity;
import com.example.reactspringbootcrud.book.BookRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin("*")
public class MainController {

    @Autowired
    private BookRepo bookRepo;

    @GetMapping("/books")
    public @ResponseBody List<BookEntity> getRequest(){
        return bookRepo.findAll();
    }

    @PostMapping("/addbook")
    public @ResponseBody String postRequest(@RequestBody BookEntity book){
        bookRepo.save(book);
        return "Added";
    }

    @PatchMapping("/updatebook")
    public @ResponseBody String patchRequest(@RequestBody BookEntity book){
        bookRepo.save(book);
        return "Updated";
    }

    @DeleteMapping("/deletebook")
    public @ResponseBody String deleteRequest(@RequestBody  Map<String, Integer> reqEntity) {
        bookRepo.deleteById(reqEntity.get("id"));
        return "Deleted";
    }
}
