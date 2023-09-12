package com.example.applaudify.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping
public class Controller {

    @GetMapping
    public String hello() {
        return "Hello I am Timpa";
    }

    public String ica() {
        return "Hello my name is Ilija and I like to eat food.";
    }
}

