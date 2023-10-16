package com.example.applaudify.model;

import lombok.Data;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.util.Date;

@Data
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
}
