package com.example.applaudify.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document(collection = "users")
public class User {
    @Id
    private String id;
    private String email;
    private String name;
    private String imageURL;
    private List<String> hiddenCards;

    public User() {
    }

    public User(String id, String email, String name, String imageURL, List<String> hiddenCards) {
        this.id = id;
        this.email = email;
        this.name = name;
        this.imageURL = imageURL;
        this.hiddenCards = hiddenCards;
    }

    public User(String id, String email, String name, String imageURL) {
        this.id = id;
        this.email = email;
        this.name = name;
        this.imageURL = imageURL;
    }

    public User(String email, String name) {
        this.email = email;
        this.name = name;
    }

    public User(String email) {
        this.email = email;
    }

    public String getImageURL() {
        return imageURL;
    }

    public void setImageURL(String imageURL) {
        this.imageURL = imageURL;
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

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<String> getHiddenCards() {
        return hiddenCards;
    }

    public void setHiddenCards(List<String> hiddenCards) {
        this.hiddenCards = hiddenCards;
    }
}
