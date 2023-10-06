package com.example.applaudify.controller;

import com.example.applaudify.ApplaudifyApplication;
import com.example.applaudify.model.User;
import com.example.applaudify.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RestController
@RequestMapping("/users")
@CrossOrigin("*")
public class UserController {

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

    @GetMapping("/id/{userId}")
    public ResponseEntity<User> getUserById(@PathVariable String userId) {
        User user = userService.findUserById(userId);
        return ResponseEntity.ok(user);
    }

    @GetMapping("/email/{userEmail}")
    public ResponseEntity<User> getUserByEmail(@PathVariable String userEmail) {
        User user = userService.findUserByEmail(userEmail);
        return ResponseEntity.ok(user);
    }

    @PostMapping("/add")
    public ResponseEntity<User> addUser(@RequestBody User user) {
        User findUser = userService.findUserByEmail(user.getEmail());
        if (findUser == null) {
            return ResponseEntity.ok(userService.addUser(user));
        }
        return ResponseEntity.ok(findUser);
    }


}
