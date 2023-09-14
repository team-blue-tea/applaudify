package com.example.applaudify;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "appreciations")
public class Appreciation {

    @Id
    private String id;
    private String senderName;
    private String receiverName;
//    private String userRelation;
//    private String senderImageUrl;
//    private String receiverImageUrl;
    private String comment;

    public Appreciation(String senderName, String receiverName, String comment) {
        this.senderName = senderName;
        this.receiverName = receiverName;
        this.comment = comment;
    }

    public String getSenderName() {
        return senderName;
    }

    public void setSenderName(String senderName) {
        this.senderName = senderName;
    }

    public String getReceiverName() {
        return receiverName;
    }

    public void setReceiverName(String receiverName) {
        this.receiverName = receiverName;
    }

//    public String getUserRelation() {
//        return userRelation;
//    }
//
//    public void setUserRelation(String userRelation) {
//        this.userRelation = userRelation;
//    }
//
//    public String getSenderImageUrl() {
//        return senderImageUrl;
//    }
//
//    public void setSenderImageUrl(String senderImageUrl) {
//        this.senderImageUrl = senderImageUrl;
//    }
//
//    public String getReceiverImageUrl() {
//        return receiverImageUrl;
//    }
//
//    public void setReceiverImageUrl(String receiverImageUrl) {
//        this.receiverImageUrl = receiverImageUrl;
//    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }
}
