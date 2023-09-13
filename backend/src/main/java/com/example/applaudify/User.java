package com.example.applaudify;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document(collection = "users")
public class User {
    @Id
    private String id;
    private String email;
    private String firstName;
    private String lastName;

    //private List<Appreciation> appreciationList;

    public User() {
    }

    public User(String email) {
        this.email = email;
    }

//    public User(String email, String firstName, String lastName, List<Appreciation> appreciationList) {
//        this.email = email;
//        this.firstName = firstName;
//        this.lastName = lastName;
//        this.appreciationList = appreciationList;
//    }

    public User(String email, String firstName, String lastName) {
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
    }


    public String getId() {
        return id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

//    public List<Appreciation> getAppreciationList() {
//        return appreciationList;
//    }
//
//    public void setAppreciationList(List<Appreciation> appreciationList) {
//        this.appreciationList = appreciationList;
//    }
}
