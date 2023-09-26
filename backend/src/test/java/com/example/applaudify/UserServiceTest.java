package com.example.applaudify;

import com.example.applaudify.model.User;
import com.example.applaudify.repository.UserRepository;
import com.example.applaudify.service.UserService;
import org.assertj.core.util.Arrays;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
public class UserServiceTest {

    @Mock
    private UserRepository userRepository;

    @InjectMocks
    private UserService userService;

    @Test
    void getUsersShouldReturnListOfUsers() {

        var mockedUserList = new ArrayList<User>();
        mockedUserList.add(new User("testemail1@gmail.com", "Test Name 1"));
        mockedUserList.add(new User("testemail2@gmail.com", "Test Name 2"));
        when(userRepository.findAll()).thenReturn(mockedUserList);

        var userList = userService.getUsers();

        assertEquals(mockedUserList, userList);
    }
}
