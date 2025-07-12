package com.cognizant.spring_learn;


import java.util.Base64;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class AuthenticationController {

    @RequestMapping("/authenticate")
    public ResponseEntity<String> authenticate(@RequestHeader("Authorization") String authHeader) {

        // Basic dXNlcjpwd2Q=
        if (authHeader != null && authHeader.startsWith("Basic ")) {
            String base64Credentials = authHeader.substring("Basic ".length());
            byte[] credDecoded = Base64.getDecoder().decode(base64Credentials);
            String credentials = new String(credDecoded);
            String[] values = credentials.split(":", 2);

            String username = values[0];
            String password = values[1];

            // (For now) allow only user:pwd
            if ("user".equals(username) && "pwd".equals(password)) {
                return ResponseEntity.ok("{\"token\":\"DUMMY_TOKEN_FOR_NOW\"}");
            } else {
                return ResponseEntity.status(401).body("{\"error\":\"Invalid credentials\"}");
            }
        }

        return ResponseEntity.status(400).body("{\"error\":\"Authorization header missing or malformed\"}");
    }
}