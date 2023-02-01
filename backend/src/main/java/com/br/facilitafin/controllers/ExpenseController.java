package com.br.facilitafin.controllers;

import com.br.facilitafin.config.SecurityConstants;
import com.br.facilitafin.models.Expense;
import com.br.facilitafin.models.FinancialRegister;
import com.br.facilitafin.models.User;
import com.br.facilitafin.services.AuthenticationService;
import com.br.facilitafin.services.ExpenseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping({"api/v1/expense"})
public class ExpenseController {

    @Autowired
    ExpenseService expenseService;

    @Autowired
    AuthenticationService authenticationService;

    @PostMapping
    public ResponseEntity<FinancialRegister> create(@RequestBody Expense expense, @RequestHeader(value = SecurityConstants.HEADER_STRING) String headerToken) {
        String username = authenticationService.retrieveUserNameFromToken(headerToken);
        Expense expenseResponse=expenseService.create(expense, username);
        return ResponseEntity.status(HttpStatus.CREATED).body(new FinancialRegister(expenseResponse));
    }

    @GetMapping
    public ResponseEntity<List<Expense>> list(@RequestHeader(value = SecurityConstants.HEADER_STRING) String headerToken){
        String username = authenticationService.retrieveUserNameFromToken(headerToken);
        List<Expense> listExpense=expenseService.listByUser(username);
        return ResponseEntity.status(HttpStatus.OK).body(listExpense);
    }
}
