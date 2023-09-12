package com.example.applaudify;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document
public class User {

    @Id
    private String id;
    private String email;
    private String firstName;
    private String lastName;
    private List<Appreciation> appreciationList;
}
