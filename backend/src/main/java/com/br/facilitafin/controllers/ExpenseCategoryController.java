package com.br.facilitafin.controllers;

import com.br.facilitafin.config.SecurityConstants;
import com.br.facilitafin.models.Expense;
import com.br.facilitafin.models.ExpenseCategory;
import com.br.facilitafin.services.AuthenticationService;
import com.br.facilitafin.services.ExpenseCategoryService;
import com.br.facilitafin.services.ExpenseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping({"api/v1/expense-category"})
public class ExpenseCategoryController {
    @Autowired
    ExpenseCategoryService expenseCategoryService;

    @Autowired
    AuthenticationService authenticationService;

    @PostMapping
    public ResponseEntity<String> create(@RequestBody ExpenseCategory expenseCategory, @RequestHeader(value = SecurityConstants.HEADER_STRING) String headerToken) {
        String username = authenticationService.retrieveUserNameFromToken(headerToken);
        ExpenseCategory expenseCategoryResponse=expenseCategoryService.create(expenseCategory,username);
        return ResponseEntity.status(HttpStatus.CREATED).body("Expense category created successfully");
    }

    @GetMapping
    public ResponseEntity<List<ExpenseCategory>> list(@RequestHeader(value = SecurityConstants.HEADER_STRING) String headerToken){
        String username = authenticationService.retrieveUserNameFromToken(headerToken);
        List<ExpenseCategory> list=expenseCategoryService.listByUser(username);
        return ResponseEntity.status(HttpStatus.OK).body(list);
    }
}
