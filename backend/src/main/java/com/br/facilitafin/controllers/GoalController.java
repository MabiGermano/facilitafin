package com.br.facilitafin.controllers;

import com.br.facilitafin.config.SecurityConstants;
import com.br.facilitafin.models.FinancialRegister;
import com.br.facilitafin.models.Goal;
import com.br.facilitafin.models.Income;
import com.br.facilitafin.services.AuthenticationService;
import com.br.facilitafin.services.GoalService;
import com.br.facilitafin.services.IncomeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@CrossOrigin(origins = "*")
@RestController
@RequestMapping({"api/v1/goal"})
public class GoalController {

    @Autowired
    GoalService goalService;

    @Autowired
    AuthenticationService authenticationService;

    @PostMapping
    public ResponseEntity<String> create(@RequestBody Goal goal, @RequestHeader(value = SecurityConstants.HEADER_STRING) String headerToken) {
        String username = authenticationService.retrieveUserNameFromToken(headerToken);
        Goal incomeResponse=goalService.create(goal, username);
        return ResponseEntity.status(HttpStatus.CREATED).body("Expense category created successfully");
    }
}
