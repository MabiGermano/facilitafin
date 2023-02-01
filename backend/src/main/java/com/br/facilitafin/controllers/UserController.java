package com.br.facilitafin.controllers;

import com.br.facilitafin.config.SecurityConstants;
import com.br.facilitafin.models.LoggedUser;
import com.br.facilitafin.models.User;
import com.br.facilitafin.services.AuthenticationService;
import com.br.facilitafin.services.ExpenseCategoryService;
import com.br.facilitafin.services.GoalService;
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

    @Autowired
    ExpenseCategoryService expenseCategoryService;

    @Autowired
    GoalService goalService;

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
    public ResponseEntity<LoggedUser> findOne(@RequestHeader(value = SecurityConstants.HEADER_STRING) String headerToken){
        log.warn(headerToken);
        String username = authenticationService.retrieveUserNameFromToken(headerToken);
        System.out.println(username);
        LoggedUser userResponse=userService.findByLoggedUser(username);
        userResponse.setExpenseCategories(expenseCategoryService.listByUser(username));
        userResponse.setGoals(goalService.listByUser(username));
        return ResponseEntity.status(HttpStatus.OK).body(userResponse);
    }
}