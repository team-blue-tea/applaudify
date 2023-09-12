package com.example.applaudify.repository;

import com.example.applaudify.User;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository extends MongoRepository<User, String> {


}
