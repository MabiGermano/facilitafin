package com.br.facilitafin.controllers;

import com.br.facilitafin.config.SecurityConstants;
import com.br.facilitafin.models.User;
import com.br.facilitafin.services.AuthenticationService;
import com.br.facilitafin.services.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@Slf4j
@RestController
@RequestMapping({"api/v1/user"})
public class UserController {

    @Autowired
    UserService userService;

    @Autowired
    AuthenticationService authenticationService;

    @PostMapping
    public ResponseEntity<String> create(@RequestBody User user) {
        User userResponse=userService.create(user);
        return ResponseEntity.status(HttpStatus.CREATED).body(user.getGlobalId().toString());
    }

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody User user) {
        log.debug(user.getUsername());
        System.out.println("login");
        String token = authenticationService.generateToken(user);
        return ResponseEntity.status(HttpStatus.OK).body(token);
    }

    @GetMapping
    public ResponseEntity<User> findOne(@RequestHeader(value = SecurityConstants.HEADER_STRING) String headerToken){
        log.warn(headerToken);

        System.out.println("findOne");
        String username = authenticationService.retrieveUserNameFromToken(headerToken);
        System.out.println(username);
        User userResponse=userService.findByUsername(username);

        return ResponseEntity.status(HttpStatus.OK).body(userResponse);
    }
}