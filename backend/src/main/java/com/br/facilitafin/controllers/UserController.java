package com.br.facilitafin.controllers;

import com.br.facilitafin.models.User;
import com.br.facilitafin.services.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;


@Slf4j
@RestController
@RequestMapping({"api/v1/user"})
public class UserController {

    @Autowired
    UserService userService;

    @PostMapping
    public ResponseEntity<String> create(@RequestBody User user) {
        User userResponse=userService.create(user);
        return ResponseEntity.status(HttpStatus.CREATED).body(user.getGlobalId().toString());
    }

    @PostMapping("/login")
    public ResponseEntity login(@RequestBody User user) {
        log.debug(user.getUsername());
        return ResponseEntity.status(HttpStatus.OK).build();
    }


    @GetMapping
    public ResponseEntity<User> findOne(@RequestBody User user){
        User userResponse=userService.findOne(user);
        return ResponseEntity.status(HttpStatus.OK).body(userResponse);
    }
}