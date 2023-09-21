package com.example.applaudify.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "appreciations")
public class Appreciation {
    @Id
    private String id;
    private String senderName;
    private String receiverName;

    public Appreciation() {
    }

    private String comment;
    private String imageId;
    private String tenorUrl;

    public Appreciation(String id, String senderName, String receiverName, String comment, String imageId, String tenorUrl) {
        this.id = id;
        this.senderName = senderName;
        this.receiverName = receiverName;
        this.comment = comment;
        this.imageId = imageId;
        this.tenorUrl = tenorUrl;
    }

    public Appreciation(String senderName, String receiverName, String comment) {
        this.senderName = senderName;
        this.receiverName = receiverName;
        this.comment = comment;
    }

    public String getImageId() {
        return imageId;
    }

    public void setImageId(String imageId) {
        this.imageId = imageId;
    }

    public String getTenorUrl() {
        return tenorUrl;
    }

    public void setTenorUrl(String tenorUrl) {
        this.tenorUrl = tenorUrl;
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

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }
}
