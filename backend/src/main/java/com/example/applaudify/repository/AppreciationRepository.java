package com.example.applaudify.repository;

import com.example.applaudify.Appreciation;
import org.springframework.data.mongodb.repository.MongoRepository;


public interface AppreciationRepository extends MongoRepository<Appreciation, String> {
}
