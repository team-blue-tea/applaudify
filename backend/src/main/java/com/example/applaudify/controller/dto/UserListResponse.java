package com.example.applaudify.controller.dto;

import com.example.applaudify.model.User;
import lombok.Builder;

import java.util.List;

@Builder
public record UserListResponse(
        List<User> userList
) {
}
