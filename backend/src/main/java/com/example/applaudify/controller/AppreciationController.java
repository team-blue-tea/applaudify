package com.example.applaudify.controller;

import com.example.applaudify.Appreciation;
import com.example.applaudify.service.AppreciationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/appreciations")
public class AppreciationController {

    private final AppreciationService appreciationService;

    @Autowired
    public AppreciationController(AppreciationService appreciationService) {
        this.appreciationService = appreciationService;
    }

    @GetMapping
    public ResponseEntity<List<Appreciation>> getAppreciations() {
        List<Appreciation> appreciationList = appreciationService.getAppreciations();
        return ResponseEntity.ok(appreciationList);
    }

    @PostMapping("/add")
    public ResponseEntity<Appreciation> addAppreciation(@RequestBody Appreciation appreciation) {
        Appreciation newAppreciation = appreciationService.addAppreciation(appreciation);
        return ResponseEntity.ok(newAppreciation);
    }
}
