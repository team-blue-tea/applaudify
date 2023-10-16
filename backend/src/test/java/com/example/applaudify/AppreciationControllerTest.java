package com.example.applaudify;

import com.example.applaudify.controller.AppreciationController;
import com.example.applaudify.model.Appreciation;
import com.example.applaudify.service.AppreciationService;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.http.HttpStatus;

import java.util.ArrayList;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
public class AppreciationControllerTest {

    @Mock
    private AppreciationService appreciationService;

    @InjectMocks
    private AppreciationController appreciationController;

//    @Test
//    void getAppreciationsShouldReturnListOfAppreciationsAndStatusCode200 () {
//
//        var mockedAppreciationsList = new ArrayList<Appreciation>();
//        mockedAppreciationsList.add(new Appreciation("a982a730-631d-428b-963f-29dbcde1e727", "Test User 1", "Test User 2", "Great job yesterday!", "1", "www.testtenorurl.com"));
//        mockedAppreciationsList.add(new Appreciation("a982a730-631d-428b-963f-29dbcde1e727", "Test User 2", "Test User 1", "Very job yesterday!", "2", "www.testtenorurl.com"));
//
//        when(appreciationService.getAppreciations()).thenReturn(mockedAppreciationsList);
//
//        var response = appreciationController.getAppreciations();
//
//        assertEquals(mockedAppreciationsList, response.getBody());
//        assertEquals(HttpStatus.OK, response.getStatusCode());
//    }

//    @Test
//    void addAppreciationShouldReturnAppreciationAndStatusCode201 () {
//
//        var mockedAppreciation = new Appreciation("a982a730-631d-428b-963f-29dbcde1e727", "Test User 1", "Test User 2", "Great job yesterday!", "1", "www.testtenorurl.com");
//
//        when(appreciationService.addAppreciation(mockedAppreciation)).thenReturn(mockedAppreciation);
//
//        var response = appreciationController.addAppreciation(mockedAppreciation);
//
//        assertEquals(mockedAppreciation, response.getBody());
//        assertEquals(HttpStatus.CREATED, response.getStatusCode());
//    }

}
