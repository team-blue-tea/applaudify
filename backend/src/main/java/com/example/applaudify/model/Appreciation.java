package com.example.applaudify.model;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;
import java.util.Date;

@Document(collection = "appreciations")
public class Appreciation {
    @Id
    private String id;
    private String senderName;
    private String receiverName;
    private String senderImageURL;
    private String receiverImageURL;
    private String comment;
    private String imageId;
    private String tenorUrl;
    @CreatedDate
    private Date createdAt;

    public Appreciation() {
    }

    public Appreciation(String id, String senderName, String receiverName, String senderImageURL, String receiverImageURL, String comment, String imageId, String tenorUrl, Date createdAt) {
        this.id = id;
        this.senderName = senderName;
        this.receiverName = receiverName;
        this.senderImageURL = senderImageURL;
        this.receiverImageURL = receiverImageURL;
        this.comment = comment;
        this.imageId = imageId;
        this.tenorUrl = tenorUrl;
        this.createdAt = createdAt;
    }


    public Appreciation(String id, String senderName, String receiverName, String comment, String imageId, String tenorUrl) {
        this.id = id;
        this.senderName = senderName;
        this.receiverName = receiverName;
        this.comment = comment;
        this.imageId = imageId;
        this.tenorUrl = tenorUrl;
    }

    public String getSenderImageURL() {
        return senderImageURL;
    }

    public void setSenderImageURL(String senderImageURL) {
        this.senderImageURL = senderImageURL;
    }

    public String getReceiverImageURL() {
        return receiverImageURL;
    }

    public void setReceiverImageURL(String receiverImageURL) {
        this.receiverImageURL = receiverImageURL;
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

    public String getId() {
        return id;
    }

    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }

    public Date getCreatedAt() {
        return createdAt;
    }


}
