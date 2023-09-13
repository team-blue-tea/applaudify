package com.example.applaudify;

import com.example.applaudify.repository.UserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@SpringBootApplication
@EnableMongoRepositories
public class ApplaudifyApplication {

	private static final Logger logger = LoggerFactory.getLogger(ApplaudifyApplication.class);

	public static void main(String[] args) {
		SpringApplication.run(ApplaudifyApplication.class, args);
	}
}
