package com.br.facilitafin.controllers;

import com.br.facilitafin.models.User;
import com.br.facilitafin.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping({"api/v1/user"})
public class UserController {

    @Autowired
    UserService userService;

    @PostMapping
    public ResponseEntity<User> create(@RequestBody User user) {
        User userResponse=userService.create(user);
        return ResponseEntity.status(HttpStatus.CREATED).body(userResponse);
    }
}