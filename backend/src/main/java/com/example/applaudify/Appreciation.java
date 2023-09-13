package com.example.applaudify;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "appreciations")
public class Appreciation {

    @Id
    private String id;
    private String senderId;
    private String receiverId;
//    private String userRelation;
//    private String senderImageUrl;
//    private String receiverImageUrl;
    private String comment;

    public Appreciation(String senderId, String receiverId, String comment) {
        this.senderId = senderId;
        this.receiverId = receiverId;
        this.comment = comment;
    }

    public String getSenderId() {
        return senderId;
    }

    public void setSenderId(String senderId) {
        this.senderId = senderId;
    }

    public String getReceiverId() {
        return receiverId;
    }

    public void setReceiverId(String receiverId) {
        this.receiverId = receiverId;
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
