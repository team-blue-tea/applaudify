//package com.example.applaudify;
//
//import com.example.applaudify.controller.UserController;
//import com.example.applaudify.model.User;
//import com.example.applaudify.service.UserService;
//import org.junit.jupiter.api.Test;
//import org.junit.jupiter.api.extension.ExtendWith;
//import org.mockito.InjectMocks;
//import org.mockito.Mock;
//import org.mockito.junit.jupiter.MockitoExtension;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//
//import java.util.ArrayList;
//import java.util.List;
//
//import static org.junit.jupiter.api.Assertions.assertEquals;
//import static org.mockito.Mockito.when;
//
//@ExtendWith(MockitoExtension.class)
//public class UserControllerTest {
//
//    @Mock
//    private UserService userService;
//
//    @InjectMocks
//    private UserController userController;
//
//    @Test
//    void getUsersShouldReturnListOfUsersAndStatus200() {
//
//        var mockedUserList = new ArrayList<User>();
//        mockedUserList.add(new User("testuser1@gmail.com", "Test User 1"));
//        mockedUserList.add(new User("testuser2@gmail.com", "Test User 2"));
//        when(userService.getUsers()).thenReturn(mockedUserList);
//
//        ResponseEntity<List<User>> response = userController.getUsers();
//
//        assertEquals(HttpStatus.OK, response.getStatusCode());
//        assertEquals(mockedUserList, response.getBody());
//    }
//
//    @Test
//    void addUserShouldAddUserAndReturnItWithStatus200() {
//
//        var mockedUser = new User("testemail@gmail.com", "Testko Testic");
//        when(userService.addUser(mockedUser)).thenReturn(mockedUser);
//
//        ResponseEntity<User> response = userController.addUser(mockedUser);
//
//        assertEquals(HttpStatus.OK, response.getStatusCode());
//        assertEquals(mockedUser, response.getBody());
//    }
//}
