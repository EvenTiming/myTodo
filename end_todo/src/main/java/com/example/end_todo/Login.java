package com.example.end_todo;

import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@CrossOrigin(origins = "http://localhost:8081")
@RestController
public class Login {

    @GetMapping("/login")
    public boolean hello(@RequestParam(name = "username") String username, @RequestParam(name = "password") String password) {
        if(username.equals("wangziqi")){
            return password.equals("123456");
        }
        return false;
    }
//    @GetMapping("/login")
//    public String hello(){
//        return "hello world";
//    }

}
