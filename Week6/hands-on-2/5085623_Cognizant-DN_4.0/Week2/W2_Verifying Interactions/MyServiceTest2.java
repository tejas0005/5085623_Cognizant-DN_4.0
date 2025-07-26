package com.example;
import static org.mockito.Mockito.*;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

public class MyServiceTest2 {

    @Test
    public void testVerifyInteraction() {
 
        ExternalApi mockApi = Mockito.mock(ExternalApi.class);

        MyService service = new MyService(mockApi);
        service.fetchData();

        System.out.println("Calling verify...");
        verify(mockApi).getData();

        System.out.println("Verified: getData() was called.");
    }
}


