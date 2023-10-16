package com.example.applaudify.controller;

import com.example.applaudify.model.Appreciation;
import com.example.applaudify.model.User;
import com.example.applaudify.service.AppreciationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/appreciations")
@CrossOrigin("*")
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

    @GetMapping("/{userId}")
    public ResponseEntity<List<Appreciation>> getAppreciationsByUserId(@PathVariable String userId) {
        var appreciations = appreciationService.findAppreciationsById(userId);
        return ResponseEntity.ok(appreciations);
    }

    @PostMapping("/add")
    public ResponseEntity<Appreciation> addAppreciation(@RequestBody Appreciation appreciation) {
        Appreciation newAppreciation = appreciationService.addAppreciation(appreciation);
        return new ResponseEntity<>(newAppreciation, HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteAppreciation(@PathVariable String id) {
        appreciationService.deleteAppreciation(id);
        return ResponseEntity.noContent().build();
    }
}
