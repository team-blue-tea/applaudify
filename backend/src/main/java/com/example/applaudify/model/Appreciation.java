package com.example.applaudify.model;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.PersistenceConstructor;
import org.springframework.data.annotation.PersistenceCreator;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;
import java.util.Date;


@Document(collection = "appreciations")
public class Appreciation {
    @Id
    private String id;
    private String senderName;
    private String senderId;
    private String receiverName;
    private String receiverId;
    private String senderImageURL;
    private String receiverImageURL;
    private String comment;
    private String imageId;
    private String tenorUrl;
    @CreatedDate
    private Date createdAt;

    @PersistenceCreator
    private Appreciation(
            String id,
            String senderName,
            String senderId,
            String receiverName,
            String receiverId,
            String senderImageURL,
            String receiverImageURL,
            String comment,
            String imageId,
            String tenorUrl,
            Date createdAt
    ) {
        this.id = id;
        this.senderName = senderName;
        this.senderId = senderId;
        this.receiverName = receiverName;
        this.receiverId = receiverId;
        this.senderImageURL = senderImageURL;
        this.receiverImageURL = receiverImageURL;
        this.comment = comment;
        this.imageId = imageId;
        this.tenorUrl = tenorUrl;
        this.createdAt = createdAt;
    }

    private Appreciation(AppreciationBuilder builder) {
        this.id = builder.id;
        this.senderName = builder.senderName;
        this.senderId = builder.senderId;
        this.receiverName = builder.receiverName;
        this.receiverId = builder.receiverId;
        this.senderImageURL = builder.senderImageURL;
        this.receiverImageURL = builder.receiverImageURL;
        this.comment = builder.comment;
        this.imageId = builder.imageId;
        this.tenorUrl = builder.tenorUrl;
        this.createdAt = builder.createdAt;
    }

    public static class AppreciationBuilder {
        private String id;
        private String senderName;
        private String senderId;
        private String receiverName;
        private String receiverId;
        private String senderImageURL;
        private String receiverImageURL;
        private String comment;
        private String imageId;
        private String tenorUrl;
        private Date createdAt;

        public AppreciationBuilder() {
        }

        public AppreciationBuilder id(String id) {
            this.id = id;
            return this;
        }

        public AppreciationBuilder senderName(String senderName) {
            this.senderName = senderName;
            return this;
        }

        public AppreciationBuilder senderId(String senderId) {
            this.senderId = senderId;
            return this;
        }

        public AppreciationBuilder receiverName(String receiverName) {
            this.receiverName = receiverName;
            return this;
        }

        public AppreciationBuilder receiverId(String receiverId) {
            this.receiverId = receiverId;
            return this;
        }

        public AppreciationBuilder senderImageURL(String senderImageURL) {
            this.senderImageURL = senderImageURL;
            return this;
        }

        public AppreciationBuilder receiverImageURL(String receiverImageURL) {
            this.receiverImageURL = receiverImageURL;
            return this;
        }

        public AppreciationBuilder comment(String comment) {
            this.comment = comment;
            return this;
        }

        public AppreciationBuilder imageId(String imageId) {
            this.imageId = imageId;
            return this;
        }

        public AppreciationBuilder tenorUrl(String tenorUrl) {
            this.tenorUrl = tenorUrl;
            return this;
        }

        public AppreciationBuilder createdAt(Date createdAt) {
            this.createdAt = createdAt;
            return this;
        }

        public Appreciation build() {
            return new Appreciation(id, senderName, senderId, receiverName, receiverId, senderImageURL, receiverImageURL, comment, imageId, tenorUrl, createdAt);
        }
    }

    public static AppreciationBuilder builder() {
        return new AppreciationBuilder();
    }

    @Override
    public String toString() {
        return "Appreciation{" +
                "id='" + id + '\'' +
                ", senderName='" + senderName + '\'' +
                ", senderId='" + senderId + '\'' +
                ", receiverName='" + receiverName + '\'' +
                ", receiverId='" + receiverId + '\'' +
                ", senderImageURL='" + senderImageURL + '\'' +
                ", receiverImageURL='" + receiverImageURL + '\'' +
                ", comment='" + comment + '\'' +
                ", imageId='" + imageId + '\'' +
                ", tenorUrl='" + tenorUrl + '\'' +
                ", createdAt=" + createdAt +
                '}';
    }
}