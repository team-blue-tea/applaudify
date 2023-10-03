package com.example.applaudify.service;

import com.example.applaudify.model.Appreciation;
import com.example.applaudify.repository.AppreciationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AppreciationService {

    private final AppreciationRepository appreciationRepository;

    @Autowired
    public AppreciationService(AppreciationRepository appreciationRepository) {
        this.appreciationRepository = appreciationRepository;
    }

    public Appreciation addAppreciation(Appreciation.AppreciationBuilder builder) {
        Appreciation appreciation = builder.build();
        return appreciationRepository.save(appreciation);
    }

    public List<Appreciation> getAppreciations() {
        return appreciationRepository.findAll();
    }
}
