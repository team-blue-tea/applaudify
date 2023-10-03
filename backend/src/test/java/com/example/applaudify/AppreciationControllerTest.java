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

    @Test
    void getAppreciationsShouldReturnListOfAppreciationsAndStatusCode200 () {

        var mockedAppreciationsList = new ArrayList<Appreciation>();
        mockedAppreciationsList.add(Appreciation.builder()
                .id("a982a730-631d-428b-963f-29dbcde1e727")
                .senderName("Test User 1")
                .receiverName("Test User 2")
                .comment("Great job!")
                .imageId("1")
                .tenorUrl("www.testtenorurl1.com")
                .build());
        mockedAppreciationsList.add(Appreciation.builder()
                .id("a982a730-631d-428b-963f-29dbcde1e222")
                .senderName("Test User 3")
                .receiverName("Test User 4")
                .comment("Nice!")
                .imageId("2")
                .tenorUrl("www.testtenorurl2.com")
                .build());

        when(appreciationService.getAppreciations()).thenReturn(mockedAppreciationsList);

        var response = appreciationController.getAppreciations();

        assertEquals(mockedAppreciationsList, response.getBody());
        assertEquals(HttpStatus.OK, response.getStatusCode());
    }

//    @Test
//    void addAppreciationShouldReturnAppreciationAndStatusCode201 () {
//
//        var mockedAppreciation = Appreciation.builder()
//                .id("a982a730-631d-428b-963f-29dbcde1e727")
//                .senderName("Test User 1")
//                .receiverName("Test User 2")
//                .comment("Great job!")
//                .imageId("1")
//                .tenorUrl("www.testtenorurl1.com")
//                .build();
//
//        when(appreciationService.addAppreciation(mockedAppreciation)).thenReturn(mockedAppreciation);
//
//        var response = appreciationController.addAppreciation(mockedAppreciation);
//
//        assertEquals(mockedAppreciation, response.getBody());
//        assertEquals(HttpStatus.CREATED, response.getStatusCode());
//    }

}
