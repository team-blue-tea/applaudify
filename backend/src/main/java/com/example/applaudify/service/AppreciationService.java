package com.example.applaudify.service;

import com.example.applaudify.model.Appreciation;
import com.example.applaudify.repository.AppreciationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class AppreciationService {

    private final AppreciationRepository appreciationRepository;

    @Autowired
    public AppreciationService(AppreciationRepository appreciationRepository) {
        this.appreciationRepository = appreciationRepository;
    }

    public Appreciation addAppreciation(Appreciation appreciation) {
        return appreciationRepository.save(appreciation);
    }

    public List<Appreciation> getAppreciations() {
        return appreciationRepository.findAll();
    }

    public List<Appreciation> findAppreciationsById(String userId) {
        var appreciations = new ArrayList<Appreciation>();
        appreciations.addAll(appreciationRepository.findAllBySenderId(userId));
        appreciations.addAll(appreciationRepository.findAllByReceiverId(userId));
        return appreciations;
    }
}
