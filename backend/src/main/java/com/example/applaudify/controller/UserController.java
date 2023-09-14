package com.example.applaudify.controller;

import com.example.applaudify.ApplaudifyApplication;
import com.example.applaudify.User;
import com.example.applaudify.repository.UserRepository;
import com.example.applaudify.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
@CrossOrigin("*")
public class UserController {

    private static final Logger logger = LoggerFactory.getLogger(ApplaudifyApplication.class);

    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    public ResponseEntity<List<User>> getUsers() {
        List<User> userList = userService.getUsers();
        return ResponseEntity.ok(userList);
    }

    @PostMapping("/add")
    public ResponseEntity<User> addUser(@RequestBody User user) {
        logger.info("Received a request to create a user: {}", user);

        User savedUser = userService.addUser(user);
        if (savedUser != null) {
            logger.info("User created successfully: {}", savedUser);
        } else {
            logger.error("Failed to create user: {}", user);
        }
        return ResponseEntity.ok(savedUser);
    }
}
