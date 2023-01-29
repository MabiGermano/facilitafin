package com.br.facilitafin.controllers;


import com.br.facilitafin.config.SecurityConstants;
import com.br.facilitafin.models.Income;
import com.br.facilitafin.services.AuthenticationService;
import com.br.facilitafin.services.IncomeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping({"api/v1/income"})
public class IncomeController {

    @Autowired
    IncomeService incomeService;

    @Autowired
    AuthenticationService authenticationService;

    @PostMapping
    public ResponseEntity<String> create(@RequestBody Income income, @RequestHeader(value = SecurityConstants.HEADER_STRING) String headerToken) {
        String username = authenticationService.retrieveUserNameFromToken(headerToken);
        Income incomeResponse=incomeService.create(income, username);
        return ResponseEntity.status(HttpStatus.CREATED).body("Income created successfully");
    }

    @GetMapping
    public ResponseEntity<List<Income>> list(@RequestHeader(value = SecurityConstants.HEADER_STRING) String headerToken){
        String username = authenticationService.retrieveUserNameFromToken(headerToken);
        List<Income> listIncome=incomeService.listByUser(username);
        return ResponseEntity.status(HttpStatus.OK).body(listIncome);
    }
}
