package com.example.applaudify.repository;

import com.example.applaudify.model.Appreciation;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;


public interface AppreciationRepository extends MongoRepository<Appreciation, String> {
    List<Appreciation> findAllBySenderId(String senderId);
    List<Appreciation> findAllByReceiverId(String receiverId);
}
